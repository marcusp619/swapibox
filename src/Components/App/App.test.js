import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { shallow } from 'enzyme';

let wrapper
let mockFilm
let mockCategory

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

it('sets default state of film to an obj', () => {
  mockFilm = {
    opening_crawl: 'test mock for film',
    episode_id: 1,
    next: null,
    previous: null,
    title: "fake starwars movie",
    results: []
  }
  mockCategory = 'films';

  wrapper.cleanFilmData = jest.fn();
  wrapper.instance().cleanFilmData(mockFilm)
  expect(wrapper.state().films).toEqual(mockFilm);

  


})
