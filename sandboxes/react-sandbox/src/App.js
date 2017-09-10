import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestCard from './RestCard';
import preload from './restaurants.json';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        {preload.restaurants.map(rest => <RestCard name={rest.name} />)}
      </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eat Union while you're in Chicago!</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
