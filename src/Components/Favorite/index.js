import React, { Component } from 'react';
import '../Button/Button.css';
import './Favorite.css'

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClickOutside = () => {
    this.setState({ listOpen: false});
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    return(
      <div className='container'>
        <div className='dropdown'>
          <div className='dropdown-button'>{this.props.title}</div>
          <span className='triangle'>&#9660;</span>
          <ul className='dropdown-selection'>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Favorite;