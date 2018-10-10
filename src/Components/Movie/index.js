import React, { Component } from 'react';
import './Movie.css';
import './StarWarsIntro.css'

class Movie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class="star-wars-intro">
        <p class="intro-text">
          A few days ago, during...
        </p>   
        <h2 class="main-logo">
          <img src="img/star-wars-intro.png" />
        </h2>
      <div class="main-content">
        <div class="title-content">
          <p class="content-header">MOVIE TITLE: EPISODE WHATEVER</p>
          <br />
          <p class="content-body">
           {this.props.randomFilmText}
          </p>
        </div>
  </div>
</div>

    )
  }
}

export default Movie;