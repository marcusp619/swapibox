import React, { Component } from 'react';
import './Header.css';
import Button from '../Button'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div className="Header">
      <div className="Header__logo">
      </div>
      <h2 className="Header__subheading">Header Component</h2>
      <Button />
    </div>
    )
  }
}

export default Header;