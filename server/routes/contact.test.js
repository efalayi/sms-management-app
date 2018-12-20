import { expect } from 'chai'
import request from 'supertest'
import app from '../app'

const server = request(app)

describe('GET /users', () => {
  it('should return a message', (done) => {
    server
      .get('/api/v1/contacts/')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
})
