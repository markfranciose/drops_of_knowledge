import React, { Component } from 'react';
import './App.css';
import RestCard from './RestCard';
import preload from './restaurants.json';
import RestJumbo from './RestJumbo';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Eat and Drink Union in Chicago!</h2>
        </div>
      <div>
      <Contact />
      <RestJumbo />
        {preload.restaurants.map(rest => <RestCard rest = {rest} name={rest.name} opentable={rest.opentable} phone={rest.phone} />)}
      </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
