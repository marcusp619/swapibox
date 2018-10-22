import React from 'react';
import './Header.css';
import Favorite from '../Favorite';

const Header = ({favoriteList, showFavorites}) => (
  <div className="Header">
    <div>
      <h2 className="Header__subheading">SwapiBox</h2>
    </div>
    <Favorite favoriteList={favoriteList} showFavorites={showFavorites} title="View Favorites" />
  </div>
);

export default Header;
