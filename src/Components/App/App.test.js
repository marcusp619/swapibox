import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import * as API from '../API/API.js'
import { shallow } from 'enzyme';

let wrapper
let mockFilm
let mockPeople

beforeEach(() => {
  wrapper = shallow(<App />);
});


describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call showPeople when button is clicked', () => {
    const expectedState = {
      activeCategory: 'People',
      film: [],
      isPeopleActive: true,
      isPlanetsActive: false,
      isVehiclesActive: false,
      people: [],
    }

    wrapper.find('.people-btn').simulate('click');
    expect(wrapper.state()).toEqual(expectedState);
  })


  it('should call showPlanets when button is clicked', () => {
    const expectedState = {
      activeCategory: 'Planets',
      film: [],
      isPeopleActive: false,
      isPlanetsActive: true,
      isVehiclesActive: false,
      people: [],
    }

    wrapper.find('.planet-btn').simulate('click');
    expect(wrapper.state()).toEqual(expectedState);
  })


  it('should call showVehicles when button is clicked', () => {
    const expectedState = {
      activeCategory: 'Vehicles',
      film: [],
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: true,
      people: [],
    }

    wrapper.find('.vehicle-btn').simulate('click');
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('componentDidMount updates state', () => {
    const expectedState = { 
      film: [],
      people: [],
      isPeopleActive: false,
      isPlanetsActive: false,
      isVehiclesActive: false,
      activeCategory: '' 
    }
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  })

})
  




