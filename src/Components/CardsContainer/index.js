import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardsContainer.css';

const CardsContainer = ({ activeCategory, toggleActiveButton, people, planets, vehicles, favoriteList }) => {
  if (!activeCategory) {
    return (
      <section className="cards-container">
        <h1>Please Select a Category</h1>
      </section>
    );
  }
  if (activeCategory === 'People') {
    const cards = people.map((person, i) => <Card {...person} activeCategory={activeCategory} toggleActiveButton={toggleActiveButton} key={Date.now() + i} />);
    return (
      <section className="cards-container">
        { cards }
      </section>
    );
  }
  if (activeCategory === 'Planets') {
    const cards = planets.map((planet, i) => <Card {...planet} activeCategory={activeCategory} toggleActiveButton={toggleActiveButton} key={Date.now() + i} />);  
    return (
      <section className="cards-container">
        { cards }
      </section>
    );
  }
  if (activeCategory === 'Vehicles') {
    const cards = vehicles.map((vehicle, i) => <Card {...vehicle} activeCategory={activeCategory} toggleActiveButton={toggleActiveButton} key={Date.now() + i} />);  
    return (
      <section className="cards-container">
        { cards }
      </section>
    );
  }
  if (activeCategory === 'Favorites') {
    const cards = favoriteList.map((item, i) => <Card {...item} activeCategory={activeCategory} key={Date.now() + i} />);
    return (
      <section className="cards-container">
        { cards }
      </section>
    );
  }
  return (
    <section className="cards-container">
      <h1>Please Select a Category</h1>
    </section>
  );
};

CardsContainer.propTypes = {
  activeCategory: PropTypes.string,
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array,
};

export default CardsContainer;
