import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header;
const enzyme = require('enzyme');

it('renders without crashing', () => {
  const wrapper = enzyme.shallow(<Header />);

   expect(wrapper).toMatchSnapshot();
});
