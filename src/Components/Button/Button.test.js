import React from 'react';
import ReactDOM from 'react-dom';
import Button from './'
import { shallow } from 'enzyme';

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
})
  