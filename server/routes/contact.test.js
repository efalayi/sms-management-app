import { expect } from 'chai'
import request from 'supertest'
import app from '../app'

const server = request(app)

describe('GET /users', () => {
  it('should return a message', async () => {
    const response = await server.get('/api/v1/contacts/')
  })
})
