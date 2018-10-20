import React from 'react';
import Card from '../Card/';
import PropTypes from 'prop-types';
import './CardsContainer.css';

const CardsContainer = ({ activeCategory, people, planets }) => {
  if(!activeCategory) {
    return (
      <section className="cards-container">   
        <h1>Please Select a Category</h1>
      </section>
    );
  } else if(activeCategory === 'People') {
    const cards = people.map((person, i) => <Card {...person} activeCategory={activeCategory} key={Date.now() + i} />);
    
    return (
      <section className="cards-container">   
        { cards }
      </section>
    );  
  } else if(activeCategory === 'Planets') {
    const cards = planets.map((planet, i) => <Card {...planet} activeCategory={activeCategory} key={Date.now() + i} />);  
    return (      
      <section className="cards-container">   
        { cards }
      </section>
    );
  } else {
    return (
      <section className="cards-container">   
        <h1>Please Select a Category</h1>
      </section>  
    )
  }
};

CardsContainer.propTypes = {
  activeCategory: PropTypes.string,
  people: PropTypes.array,
}

export default CardsContainer;
