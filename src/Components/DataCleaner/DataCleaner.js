export const cleanFilmData = filmData => {
  const filmResults = filmData.results; 
  const randomFilm = getRandomFilm(filmResults);
  const film = {
    opening_crawl: randomFilm.opening_crawl,
    title: randomFilm.title,
    release_data: randomFilm.release_date,
  }
  return film;
}

export const getRandomFilm = filmData => {
  const randomNumber = Math.floor(Math.random() * Math.floor(filmData.length))
  const randomFilm = filmData[randomNumber];
  
  return randomFilm;
}
