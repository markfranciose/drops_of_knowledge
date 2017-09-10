import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestCard from './RestCard'

class App extends Component {
  render() {
    return (
      <div className="App">
      <RestCard name='Gene and George'/>
      <RestCard name='Riva'/>
      <RestCard name='Mercat'/>
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
