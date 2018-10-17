import React from 'react';
import * as Images from '../../Assets/images/Images';
import './Card.css';

const ImgFinder = (name) => {
  const image = Images.find(person => person[name]);
  const results = Object.values(image);
  return results;
};


const Card = ({homeworld, name, species}) => {
  const img = ImgFinder(name);
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={name} />
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
