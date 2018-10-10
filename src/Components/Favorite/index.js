import React, { Component } from 'react';
import '../Button/Button.css';
import './Favorite.css'

class Favorite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button className="Button Button__favorite">
        {this.props.title}
        <span className="Favorite__counter">0</span>
      </button>
    )
  }
}

export default Favorite;