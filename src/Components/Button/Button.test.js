import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button;
const enzyme = require('enzyme');

it('renders without crashing', () => {
  const wrapper = enzyme.shallow(<Button />);

   expect(wrapper).toMatchSnapshot();
});
