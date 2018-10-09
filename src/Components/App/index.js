import React, { Component } from 'react';
import './App.css';
import Header from '../Header/'
class App extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <h1>SWAPI BOX</h1>
      </div>
    );
  }
}

export default App;
