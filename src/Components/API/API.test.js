import React from 'react';
import * as API from './API';
import * as DataCleaner from '../DataCleaner/DataCleaner.js';

let mockFilmData;

describe('API', () => {

  describe('fetchFilmData', () => {
    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(({
      status: 200,
      json: () => Promise.resolve({results: [{
        opening_crawl: 'okay',
        title: 'new title',
        release_data: '2008',
      }]})
    })));
      API.fetchFilmData();
      await expect(window.fetch).toHaveBeenCalled();
    })
    
    it('calls fetch with correct params', async () => {
      //setup
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: [{
        opening_crawl: 'okay',
        title: 'new title',
        release_data: '2008',
        }]})
      }));
      const expected = 'https://swapi.co/api/films/';
      //execution
      API.fetchFilmData();
      await expect(window.fetch).toHaveBeenCalledWith(expected);
      
    })

    it('should catch error if fetch fails', () => {
      const expected = Error('There was an error');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        json: () => Promise.reject()
      }))

      expect(API.fetchFilmData()).rejects.toEqual(expected);

    })
  })
})