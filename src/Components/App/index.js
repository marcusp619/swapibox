import React, { Component } from 'react';
import './App.css';
import Header from '../Header/';
import Button from '../Button/';
import Movie from  '../Movie/';
import CardsContainer from '../CardsContainer/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      people: [],
      vehicles: [],
      randomFilmText: '',
      isActive: false
    }
  }

  async componentDidMount() {
    await this.getCategoryData('films');
    this.generateRandomCrawl(this.state.films.results)
  }

  getCategoryData = async(category) => {
    const stateCategory = category;
    const url = `https://swapi.co/api/${category.toLowerCase()}/`;
    const response = await fetch(url);
    const starwarsData = await response.json();
    
    this.setState({ [stateCategory]: starwarsData }); 
  }

  generateRandomCrawl = (starwarsFilms) => {
    const randomNumber = Math.floor(Math.random() * Math.floor(starwarsFilms.length))
    const randomFilmText = starwarsFilms[randomNumber].opening_crawl;
    
    this.setState({ randomFilmText });
  }

  cleanCategoryData(category) {

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
          <Movie randomFilmText={this.state.randomFilmText}  />
          <CardsContainer />
        </main>
      </div>
    );
  }
}

export default App;
