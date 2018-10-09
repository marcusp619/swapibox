import React, { Component } from 'react';
import './App.css';
import Header from '../Header/';
import Button from '../Button/';
import Movie from  '../Movie/';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="Main">
          <div className="Aside">
            <Movie />
          </div>
          <div className="Button--container">
            <Button title={'People'} />
            <Button title={'Planets'}/>
            <Button title={'Vehicles'}/>
          </div>
          <div className="CardContainer">
          </div>   
        </main>
      </div>
    );
  }
}

export default App;
