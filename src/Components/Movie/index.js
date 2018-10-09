import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <p>{this.props.randomFilmText}</p>
    )
  }
}

export default Movie;