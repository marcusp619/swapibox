import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { shallow } from 'enzyme';

let wrapper

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });
})
  
beforeEach(() => {
  wrapper = shallow(<App />);
});

it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
})
