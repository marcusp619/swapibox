import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var enzyme = require('enzyme');



it('renders without crashing', () => {
  const wrapper = enzyme.shallow(<App />);

   expect(wrapper).toMatchSnapshot();
});