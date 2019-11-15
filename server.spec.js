const request = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('[GET] / endpoint', () => {
    test('the db env is testing', () => {
      expect(process.env.DB_ENV).toBe('testing')
    })
  })

  test('should return 200 OK', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
  })

  test('should return 200 OK with Es6 promise', () => {
    return request(server).get('/')
    .then(response => {
      expect(response.status).toBe(200)
    })
  })

  test('with superest syntax', () => {
    return request(server).get('/')
    .expect(200)
    .expect({ api: 'up'})
    .expect('content-Length', "12")
    .expect('content-Type', /json/)
  })

  test('returns the right response body', async () => {
    const response = await request(server).get('/')
    expect(response.body).toEqual({ api: 'up' });
  })
})