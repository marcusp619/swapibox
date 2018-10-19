import * as API from '../API/API.js';


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

export const cleanPeopleData = async peopleData => {
  try {
    const peopleDataPromises = await peopleData.map(async(person) => {
    const { name } = person;
    const { homeworld, population } = await API.fetchHomeworldData(person.homeworld);
    const { species } = await API.fetchSpeciesData(...person.species);
    const cleanedPeopleData = {
      name,
      homeworld,
      species,
      population,
    };
    
    return cleanedPeopleData;
  });
  
  return await Promise.all(peopleDataPromises);  
  } catch {
    throw Error('There was an error cleaning people data');
  }
}

export const cleanHomeworldData = homeworldData => {
  const cleanedHomeworldData = {
    homeworld: homeworldData.name,
    population: homeworldData.population,
  }

  return cleanedHomeworldData;
}

export const cleanSpeciesData = speciesData => {
  const cleanedSpeciesData = {
    species: speciesData.name,
  }

  return cleanedSpeciesData;
}