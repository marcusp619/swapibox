import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super()
    this.state = {
      isActive: false,
    }
  }

  render() {
    return(
      <button 
        className={this.state.isActive ? 'Button active' : 'Button'} 
        // onClick={() => this.toggleActive()}
      >
        { this.props.title }
      </button>
    )
  } 
}

export default Button;
