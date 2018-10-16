import React from 'react';
import './Card.css';

const Card = ({homeworld, name, species}) => {
  return (
    <div className="card">
      <div className="card-img">
      </div>
      <div className="card-body">
        <h5>{name}</h5>
        <h5>{homeworld.name}</h5>
        <h5>{species.name}</h5>
        <h5>{homeworld.population}</h5>
        <i className="star" />
      </div>
    </div>
  );
};

export default Card;
