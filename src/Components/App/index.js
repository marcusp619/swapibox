import React, { Component } from 'react';
import './App.css';
import * as API from '../API/API.js'
import Header from '../Header/';
import Button from '../Button/';
import Movie from  '../Movie/';
import CardsContainer from '../CardsContainer/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      vehicles: [],
      isActive: false,
    }
  }

  async componentDidMount() {
    const film = await API.fetchFilmData();
    this.setState({ film })
  }

  // getCategoryData = async(category) => {
  //   const stateCategory = category.toLowerCase();
  //   const url = `https://swapi.co/api/${stateCategory}/`;
  //   const response = await fetch(url);
  //   const starwarsData = await response.json();
    
  //   await this.cleanCategoryData(stateCategory, starwarsData);
  // }

  // generateRandomCrawl = starwarsFilms => {
  //   const randomNumber = Math.floor(Math.random() * Math.floor(starwarsFilms.length))
  //   const randomFilmText = starwarsFilms[randomNumber].opening_crawl;
    
  //   this.setState({ randomFilmText });
  // }

  // cleanCategoryData = (category, starwarsData) => {
  //   switch (category) {
  //     case 'people':
  //       this.cleanPeopleData(starwarsData);  
  //       break;
  //     case 'films':
  //       this.cleanFilmData(starwarsData);
  //       break;
  //     default:
  //       break;
  //   }
  // }


  cleanPeopleData = async(peopleData) => {
    const filteredPeopleData = peopleData.results.map(async(person) => {
      const responses = await this.fetchUrls(person.homeworld, ...person.species)
      const results = await this.responsesJson(responses);
      let mergedResults = {name: person.name, homeworld: await results[0], species: await results[1]};
      
      return mergedResults; 
    });
    const result = await Promise.all(filteredPeopleData);
    await this.setState({ people: result })
  }

  fetchUrls = async(...urlArray) => {
    const fetchedUrls = [await fetch(urlArray[0]), await fetch(urlArray[1])];
    return fetchedUrls;
  }

  responsesJson = async(responses) => {
    const results = [await responses[0].json(), await responses[1].json()];
    return results;
  }
  
  render() {
    return (
      <div className="App">
        <Header />
          <div className="Button--container">
            <Button title={'People'} getCategoryData={this.getCategoryData}/>
            <Button title={'Planets'} getCategoryData={this.getCategoryData}/>
            <Button title={'Vehicles'} getCategoryData={this.getCategoryData}/>
          </div>
        <main>
          <Movie film={this.state.film.opening_crawl} />
          <CardsContainer people={this.state.people} />
        </main>
      </div>
    );
  }
}

export default App;
