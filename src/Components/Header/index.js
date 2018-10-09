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
      <Button className="Button__favorite" />
      <h2 className="Header__subheading">Header Component</h2>
    </div>
    )
  }
}

export default Header;