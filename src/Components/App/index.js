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
      this.setStateStorageItems();
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
    
  setStateStorageItems = () => {
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

  getStorageItems = () => {
    const keys = Object.keys(localStorage);
    const allItems =  keys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    })
    return allItems;
  }

  toggleActiveButton = (e) => {
    e.preventDefault();
    e.target.classList.toggle('active-favorite');
    const searchName = e.target.parentNode.firstChild.textContent;

    const localStorageItems = this.getStorageItems();
    const searchThrough = {
      people: localStorageItems[1],
      planets: localStorageItems[2],
      vehicles: localStorageItems[3]
    }
    const keys = Object.keys(searchThrough);
    const rawResults = keys.reduce((acc, category) => {
      const selectedCard = searchThrough[category].find(card => card.name === searchName);
      acc.push(selectedCard);
      return acc
    }, []);

    const cleanedResults = rawResults.reduce((item, card) => {
      if(card !== undefined) {
        item.push(card)
      }
      return item
    }, [])
    
    this.setState({
      favoriteList: [...cleanedResults, ...this.state.favoriteList]
    })
  }

  showFavorites = () => {
    this.setState({
      activeCategory: 'Favorites',
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: false,
    }); 
  }

  render() {
    return (
      <div className="App">
        <Header showFavorites={this.showFavorites} favoriteList={this.state.favoriteList} />
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
            favoriteList={this.state.favoriteList}
            activeCategory={this.state.activeCategory} 
            toggleActiveButton={this.toggleActiveButton}
          />
        </main>
      </div>
    );
  }
}

export default App;
