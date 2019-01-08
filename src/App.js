import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

const Header = (props) =>  (
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
    </header>
)

const Player = (props) => (
    <div className="player">
     <span className="player-name">
         <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
         {props.name}
     </span>

        <Counter score={props.score }/>
    </div>
)

class App extends Component {
    state = {
        players: [
            {
                name: "Quyet",
                id: 1
            },
            {
                name: "Lucy",
                id: 2
            },
            {
                name: "Tu Anh",
                id: 3
            },
            {
                name: "Linh",
                id: 4
            },
            {
                name: "Taylor",
                id: 5
            },
        ]
    }
    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            }
        })
    }
    render() {
        return(
            <div className="scoreboard">
                <Header title="Quyet's Scoreboard" totalPlayers={this.state.players.length} />

                {/* Players list */}
                {this.state.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        )
    }
}

export default App;
