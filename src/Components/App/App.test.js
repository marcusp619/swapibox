import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { shallow } from 'enzyme';

let wrapper

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
})
  




