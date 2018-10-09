import React, { Component } from 'react';
import './App.css';
import Header from '../Header/';
import Button from '../Button/';
import Movie from  '../Movie/';

class App extends Component {
  constructor() {
    super();
    this.state ={
      starwarsData: [],
      starwarsFilms: [],
      randomFilmText: ''
    }
  }

  componentDidMount() {
    this.getFilmData();
  }

  // getCategoryData = async(category) => {
  //   const url = `https://swapi.co/api/${category.toLowerCase()}/`;
  //   const response = await fetch(url);
  //   const starwarsData = await response.json();
  //   this.setState({ starwarsData });
  // }

  getFilmData = async() => {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const starwarsFilms = await response.json();

    this.generateRandomCrawl(starwarsFilms.results)
    this.setState({ starwarsFilms: starwarsFilms.results });
  }

  generateRandomCrawl = (starwarsFilms) => {
    const randomNumber = Math.floor(Math.random() * Math.floor(starwarsFilms.length))
    const randomFilmText = starwarsFilms[randomNumber].opening_crawl;
    
    this.setState({ randomFilmText });
  }

  render() {
    const { randomFilmText }  = this.state;
    return (
      <div className="App">
        <aside>
          <Movie randomFilmText={randomFilmText} />
        </aside>
        <main>
        <Header />
          <div className="Button--container">
            <Button title={'People'} getCategoryData={this.getCategoryData}/>
            <Button title={'Planets'} getCategoryData={this.getCategoryData}/>
            <Button title={'Vehicles'} getCategoryData={this.getCategoryData}/>
          </div>
          <div className="CardContainer">
          </div>   
        </main>
      </div>
    );
  }
}

export default App;
