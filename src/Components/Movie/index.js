import React from 'react';
import './Movie.css';

const Movie = ({ randomFilmText }) => {
  return (
    <section class="star-wars Movie">
      <div class="crawl">
        <p>{randomFilmText}</p>
      </div>
    </section>
  );
};

export default Movie;
