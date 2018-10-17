import React from 'react';
import './Movie.css';
import './StarWarsIntro.css'

const Movie = ({ film }) => {
  return (
    <section className="star-wars Movie">
      <div className="crawl">
        <p>{ film }</p>
      </div>
    </section>
  );
};

export default Movie;
