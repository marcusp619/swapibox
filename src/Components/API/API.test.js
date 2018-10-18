import React from 'react';
import * as API from './API';

let mockFilmData; 

let mockCleanFilmData = jest.fn();

describe('API', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({})
    }));
  })

  describe('fetchFilmData', () => {
    it('should call fetch', async () => {
      API.fetchFilmData();
      await expect(window.fetch).toHaveBeenCalled();
    })
    
    it('calls fetch with correct params', async () => {
      //setup
      const expected = 'https://swapi.co/api/films/';
      //execution
      API.fetchFilmData();
      await expect(window.fetch). toHaveBeenCalledWith(expected);
      
    })

    it.skip('should return clean data', () => {

    })
  })
})