import React from 'react';
import Card from '../Card/';
import './CardsContainer.css';

const CardsContainer = ({people}) => {
  const cards = people.map((person, i) => <Card {...person} key={Date.now() + i} />);
  return (
    <section className="cards-container">   
      { cards }
    </section>
  )
};

export default CardsContainer;
