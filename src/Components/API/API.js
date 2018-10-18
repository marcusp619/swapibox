
import * as DataCleaner from '../DataCleaner/DataCleaner.js';

export const fetchFilmData = async() => {
  
  try {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const filmData = await response.json();
    const cleanedFilm = DataCleaner.cleanFilmData(filmData);
    return cleanedFilm;
  } catch (e) {
    console.log(e.message);
  }
}
