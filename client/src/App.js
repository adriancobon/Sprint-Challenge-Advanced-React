import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/ap/players')
    .then(res => res.json())
    .then(data => this.setState( {players:data}));
  }

}

export default App;
