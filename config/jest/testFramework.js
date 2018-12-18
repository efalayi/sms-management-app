import request from 'supertest'
import app from '../../server/app'

beforeAll(async () => {
  global.request = request(app)
})
