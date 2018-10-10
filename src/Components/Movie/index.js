import React from 'react';
import './Movie.css';

const Movie = ({ randomFilmText }) => {
  return (
    <p>{randomFilmText}</p>
  );
};

//Add proptypes 
export default Movie;
