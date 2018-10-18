import React from 'react';
import Card from '../Card/';
import './CardsContainer.css';

const CardsContainer = ({ activeCategory, people }) => {
  if(!activeCategory) {
    return (
      <section className="cards-container">   
        <h1>Please Select a Category</h1>
      </section>
    );
  } else if(activeCategory === 'People') {
    const cards = people.map((person, i) => <Card {...person} key={Date.now() + i} />);
    
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

export default CardsContainer;
