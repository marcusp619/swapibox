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
      favoriteList: [],
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: false,
      activeCategory: "",
    }
  }

  async componentDidMount() {
    if (localStorage.length > 0) {
      this.getAllStorageItems();
    } else {
      const planets = await API.fetchPlanetsData();
      const film = await API.fetchFilmData();
      const people = await API.fetchPeopleData();
      const vehicles = await API.fetchVehiclesData();
      
      this.setState({ film, people, planets, vehicles }) 
      localStorage.setItem('planets', JSON.stringify(planets));
      localStorage.setItem('film', JSON.stringify(film));    
      localStorage.setItem('people', JSON.stringify(people));    
      localStorage.setItem('vehicles', JSON.stringify(vehicles));    
    }
  }
    
  getAllStorageItems = () => {
    const keys = Object.keys(localStorage);
    keys.forEach(item => {
      this.setState({ [item]: JSON.parse(localStorage.getItem(item)) })
    })
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

  toggleActiveButton = e => {
    console.log(e.target.parentNode.firstChild.textContent)
    e.target.classList.toggle('active-favorite');
  }

  render() {
    return (
      <div className="App">
        <Header />
          <div className="Button--container">
            <button 
              className={this.state.isPeopleActive ? 'Button active people-btn' : 'Button people-btn'} 
              onClick={this.showPeople}
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
          <CardsContainer 
            people={this.state.people} 
            planets={this.state.planets} 
            vehicles={this.state.vehicles}
            activeCategory={this.state.activeCategory} 
            toggleActiveButton={this.toggleActiveButton}
          />
        </main>
      </div>
    );
  }
}

export default App;
