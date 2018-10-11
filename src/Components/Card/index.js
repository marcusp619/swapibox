import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src="..." alt="Card image" />
        </div>
        <div className="card-body">
          <h5>Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up</p>
          <i className ="star"></i>
        </div>
      </div>
    )
  }
}

export default Card;