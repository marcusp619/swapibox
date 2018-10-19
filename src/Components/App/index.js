import React, { Component } from 'react';
import './App.css';
import '../Button/Button.css';
import * as API from '../API/API.js'
import Header from '../Header/';
import Movie from  '../Movie/';
import CardsContainer from '../CardsContainer/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: false,
      activeCategory: "",
    }
  }

  async componentDidMount() {
    const test = await API.fetchPlanetsData();
    const film = await API.fetchFilmData();
    const people = await API.fetchPeopleData();

    this.setState({ film, people });
  }

  showPeople = () => {
    this.setState({
      activeCategory: 'People',
      isPeopleActive: true,
      isPlanetsActive: false,
      isVehiclesActive: false,
    });
  }

  showPlanets = () => {
    this.setState({
      activeCategory: 'Planets',
      isPeopleActive: false,
      isPlanetsActive: true,
      isVehiclesActive: false,
    }); 
  }

  showVehicles = () => {
    this.setState({
      activeCategory: 'Vehicles',
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: true,
    }); 
  }

  
  render() {
    return (
      <div className="App">
        <Header />
          <div className="Button--container">
            <button 
              onClick={this.showPeople}
              className={this.state.isPeopleActive ? 'Button active people-btn' : 'Button people-btn'} 
            >
              People
            </button>
            <button 
              className={this.state.isPlanetsActive ? 'Button active planet-btn' : 'Button planet-btn'} 
              onClick={this.showPlanets}
            > 
              Planets
            </button>
            <button 
              className={this.state.isVehiclesActive ? 'Button active vehicle-btn' : 'Button vehicle-btn'} 
              onClick={this.showVehicles}
            > 
              Vehicles
            </button>
          </div>
        <main>
          <Movie film={this.state.film.opening_crawl} />
          <CardsContainer people={this.state.people} activeCategory={this.state.activeCategory} />
        </main>
      </div>
    );
  }
}

export default App;
