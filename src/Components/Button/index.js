import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="Button">
        <h2>Button Component</h2>
      </div>
    )
  }
}

export default Button;