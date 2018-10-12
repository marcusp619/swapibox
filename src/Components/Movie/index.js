import React from 'react';
import './Movie.css';
import './StarWarsIntro.css'

const Movie = ({ randomFilmText }) => {
  return (
    <section className="star-wars Movie">
      <div className="crawl">
        <p>{randomFilmText}</p>
      </div>
    </section>
  );
};

export default Movie;
