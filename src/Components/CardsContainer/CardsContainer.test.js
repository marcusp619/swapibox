import React from 'react';
import ReactDOM from 'react-dom';
import CardsContainer from './';
import { shallow } from 'enzyme';

let wrapper

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardsContainer />);
  });
})
  
beforeEach(() => {
  wrapper = shallow(<CardsContainer />);
});

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

