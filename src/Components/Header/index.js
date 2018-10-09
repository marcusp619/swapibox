import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div className="Header">
      <h2>Header Component</h2>
    </div>
    )
  }
}

export default Header;