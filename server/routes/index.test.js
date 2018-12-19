import { expect } from 'chai'
import request from 'supertest'
import app from '../app'

let server

describe('GET /', () => {
  before(() => {
    server = request(app)
  })
  it('should return a message', async () => {
    const response = await server.get('/api/v1/')
    const responseText = JSON.parse(response.text)
    expect(responseText).to.have.property('message', 'Welcome to SMS management API')
  })
})
