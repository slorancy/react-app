import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './component/Membre';

const family = {
  membre1: {
    nom: 'toto',
    age: 12
  },
  membre2: {
    nom: 'tata',
    age: 13
  },
  membre3: {
    nom: 'titi',
    age: 14
  },

}

class App extends Component {
  state = {
    family
  }
  handleClick = () => {
    const family = { ...this.state.family }
    family.membre1.age += 1
    this.setState({ family })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My first app</h1>
          <p>Lorem........</p>
          <input type="text" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <Membre
          nom={family.membre1.nom}
          age={family.membre1.age} />
        <Membre
          nom={family.membre2.nom}
          age={family.membre2.age} />
        <Membre
          nom={family.membre3.nom}
          age={family.membre3.age} />

        <button
          onClick={this.handleClick}>Vieillir</button>
      </div>

    )
  };

}

export default App;
