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
        <aside>
          <Movie />
        </aside>
        <main>
        <Header />
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
