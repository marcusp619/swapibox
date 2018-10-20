import * as DataCleaner from '../DataCleaner/DataCleaner.js';

export const fetchFilmData = async() => {
  try {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const filmData = await response.json();
    const cleanedFilm = DataCleaner.cleanFilmData(filmData);
    
    return cleanedFilm;
  } catch {
     throw Error('There was an error fetching film data');
  }
}

export const fetchPeopleData = async() => {
  try {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const peopleData = await response.json();
    const cleanedPeople = await DataCleaner.cleanPeopleData(peopleData.results);
    
    return cleanedPeople;
  } catch {
    throw Error('There was an error fetching people data');
  }
}

export const fetchHomeworldData = async(homeworld) => {
  try {
    const response = await fetch(homeworld);
    const homeworldData = await response.json();
    const cleanedHomeworld = await DataCleaner.cleanHomeworldData(homeworldData);
    
    return cleanedHomeworld;  
  } catch {
   throw Error('There was an error fetching homeworld data'); 
  }  
}

export const fetchSpeciesData = async(species) => {
  try {
    const response = await fetch(species);
    const speciesData = await response.json();
    const cleanedSpeciesData = await DataCleaner.cleanSpeciesData(speciesData);
    
    return cleanedSpeciesData;  
  } catch {
    throw Error('There was an error fetching species data');  
  } 
}

export const fetchPlanetsData = async() => {
  try {
    const url = 'https://swapi.co/api/planets/';
    const response = await fetch(url);
    const planetsData = await response.json();
    const cleanedPlanets = await DataCleaner.cleanPlanetsData(planetsData.results);
    
    return cleanedPlanets;
  } catch(e) {
    throw Error('There was an error fetching planets data');
  }
}

export const fetchResidentsData = async(residents) => {
  try {
    const responses = await residents.map(async people => {
    const response = await fetch(people);
    const residentsData = await response.json();
    const cleanedResidents = await DataCleaner.cleanResidentsData(residentsData);
     
    return cleanedResidents;
  });
    
    return responses;
  } catch {
    throw Error('There was an error fetching residents data');
  }
}