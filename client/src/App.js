import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // This creates the default player database.
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  // This pulls in the data from the server and adds it to the database.
  componentDidMount() {
    fetch('http://localhost:5000/ap/players')
    .then(res => res.json())
    .then(data => this.setState( {players: data}));
  }

  // This pushes all updates to the console.
  componentDidUpdate() {
    console.log(this.state);
  }

  // This sets up the final outcome, which will be fleshed out in the functions below it.
  render() {
    return (
      <div className="App">
        <Soccer players={this.state.players} />
      </div>
    );
  }
}

function Soccer(props) {
  // sets whether or not to use darkmode. Default is false.
  const [darkMode, setDarkMode] = useDarkMode(false);
  // changes the state of darkmode when toggleMode is triggered
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkmode);
  }

// The following creates the basic interface for the app. The first one is a button to change the background color. The second shows the player information.
  return (
    <div>
      <button onClick={toggleMode}>Change Color</button>
      {props.players.map(player => (<div key={player.id}>{player.id}{player.name}{player.country}{player.searches}</div>))}
    </div>
  );
}

export default App;
