import { expect } from 'chai'
import request from 'supertest'
import app from '../app'

let server

describe('GET /users', () => {
  before(() => {
    server = request(app)
  })
  it('should return a message', async () => {
    const response = await server.get('/api/v1/users/')
    const responseText = JSON.parse(response.text)
    expect(responseText).to.have.property('message', 'No users at the moment. Please try again in the next 24 hours')
  })
})
