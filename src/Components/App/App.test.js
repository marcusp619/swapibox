import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
})
  
