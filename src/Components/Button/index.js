import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button onClick={() => this.props.getCategoryData(this.props.title)} className="Button">
        {this.props.title}
      </button>
    )
  }
}

export default Button;