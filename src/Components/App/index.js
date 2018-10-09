import React, { Component } from 'react';
import './App.css';
import Header from '../Header/'
import Button from '../Button/'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Button--container">
          <Button />
          <Button />
          <Button />
        </div>
        <h1>SWAPI BOX</h1>
      </div>
    );
  }
}

export default App;
