import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './';
import { shallow } from 'enzyme';

let wrapper

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Movie />);
  });
})
  
beforeEach(() => {
  wrapper = shallow(<Movie />);
});

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

