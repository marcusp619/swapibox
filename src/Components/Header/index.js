import React from 'react';
import './Header.css';
import Favorite from '../Favorite';

const Header = () => (
  <div className="Header">
    <h2 className="Header__subheading">SwapiBox</h2>
    <Favorite title="View Favorites" />
  </div>
);

export default Header;
