import * as API from './API';


describe('API', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({})
    }));
  })

  describe('getCategoryData', async() => {
    it.skip('should call fetch', async () => {
    })
    
    it.skip('should update state with fetch data', async() => {

    })

    it.skip('it logs an error when the fetch fails', () => {

    })
  })
})