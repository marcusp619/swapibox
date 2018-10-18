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

    it('should catch error if fetch fails', async () => {
      const expected = Error('There was an error fetching film data');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        json: () => Promise.reject()
      }))
      await expect(API.fetchFilmData()).rejects.toEqual(expected);
    })
  })

  describe('fetchPeopleData', () => {
    it('calls fetch with correct params', async () => {
      //setup
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: [{}]})
      }));
      const expected = 'https://swapi.co/api/people/';
      //execution
      API.fetchPeopleData();
      await expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(({
      status: 200,
      json: () => Promise.resolve({results: [{}]})
    })));
      API.fetchPeopleData();
      await expect(window.fetch).toHaveBeenCalled();
    })

    it('should catch error if fetch fails', async () => {
      const expected = Error('There was an error fetching people data');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        json: () => Promise.reject()
      }))
      await expect(API.fetchPeopleData()).rejects.toEqual(expected);
    })
  })

  describe('fetchHomeworldData', () => {
    it('calls fetch with correct params', async () => {
      //setup
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: [{}]})
      }));
      const expected = 'https://swapi.co/api/people/';
      //execution

      API.fetchPeopleData();
      await expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(({
      status: 200,
      json: () => Promise.resolve({results: [{}]})
    })));
      API.fetchHomeworldData();
      await expect(window.fetch).toHaveBeenCalled();
    })

    it('should catch error if fetch fails', async () => {
      const expected = Error('There was an error fetching homeworld data');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        json: () => Promise.reject()
      }))
      await expect(API.fetchHomeworldData()).rejects.toEqual(expected);
    })
  })

})