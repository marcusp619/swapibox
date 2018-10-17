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
});

it('should call getCategoryData when componentDidMount gets invoked', () => {
  wrapper.instance().getCategoryData = jest.fn();
  wrapper.instance().componentDidMount();
  expect(wrapper.instance().getCategoryData).toHaveBeenCalled();
});
