import React from 'react';
import Header from '.';
import { shallow } from 'enzyme';

describe('Header', () => {
it('renders without crashing', () => {
  const wrapper = shallow(<Header />);

   expect(wrapper).toMatchSnapshot();
  });
}); 