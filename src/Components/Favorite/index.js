import React, { Component } from 'react';
import '../Button/Button.css';
import './Favorite.css'

class Favorite extends Component {
  constructor(props) {
    super();
    this.state = {
      listOpen: false,
    }
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const list = this.props.favoriteList.map((card, i) => <li key={Date.now + i}>{card.name}</li>)
    return(
      <div onClick={this.props.showFavorites} className='container'>
        <div className='dropdown'>
          <div 
            onClick={this.toggleList} 
            className='dropdown-button'
          >
            {this.props.title}
          </div>
          <span className='triangle'>{this.props.favoriteList.length}</span>
          <ul  
            className={this.state.listOpen ? 'dropdown-selection active' : 'dropdown-selection'}
          >
            { list }
          </ul>
        </div>
      </div>
    )
  }
}

export default Favorite;