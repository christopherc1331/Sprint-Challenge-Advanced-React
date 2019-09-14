import React from "react";
import "./App.css";
import Form from "./Form.js";

import PlayerCard from "./Components/PlayerCard.js";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(data => this.setState({ players: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Form />
        <div id="testId" className="cardsContainer">
          {this.state.players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
