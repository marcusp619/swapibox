import React from 'react';
import * as Images from '../../Assets/images/Images';
import PropTypes from 'prop-types';
import './Card.css';






const Card = ({ activeCategory, homeworld, name, population, species, terrain, residents, climate, model, passengers, vehicle_class }) => {  
  if (activeCategory === 'People') {
    const ImgFinder = (name) => {
      const image = Images.find(person => person[name]);
      const results = Object.values(image);
      return results;
    };
    const img = ImgFinder(name);
    const imgStyle = {
      background: 'no-repeat',
      backgroundImage: 'url(' + img + ')',
      backgroundSize: 'cover',
      height: '40%',
      width: '278px',
    };

    return (
      <div className="card">
        <div style={activeCategory === 'People' ? imgStyle : ''} className="card-img">
        </div>
        <div className="card-body">
          <h5>{ homeworld }</h5>
          <h5>{ name }</h5>
          <h5>{ population }</h5>
          <h5>{ species }</h5>
          <i className="star" />
        </div>
      </div>
    );
  }
  if (activeCategory === 'Planets') {
    return (
      <div className="card">
        <div className="card-img">     
        </div>
        <div className="card-body">
          <h5>{ name }</h5>
          <h5>{ terrain }</h5>
          <h5>{ population }</h5>
          <h5>{ residents }</h5>
          <h5>{ climate } </h5>
          <i className="star" />
        </div>
      </div>
    );
  }
  if (activeCategory === 'Vehicles') {
    return (
      <div className="card">
        <div className="card-img">     
        </div>
        <div className="card-body">
          <h5>{ name }</h5>
          <h5>{ model }</h5>
          <h5>{ passengers }</h5>
          <h5>{ vehicle_class }</h5>
          <i className="star" />
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  homeworld: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string,
};

export default Card;
