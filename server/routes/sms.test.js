/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import request from 'supertest'
import ShortMessageFactory from '../../database/factories/shortMessage'
import app from '../app'

let createdContacts
const server = request(app)

describe('#SMS routes', () => {
  before((done) => {
    server
      .get('/api/v1/contacts')
      .end((error, response) => {
        createdContacts = response.body.contacts
        done()
      })
  })
  describe('POST /api/v1/sms/create', () => {
    it('should return an error if sms details are not included', (done) => {
      server
        .post('/api/v1/sms/create')
        .end((error, response) => {
          expect(response.body).to.have.property('errors')
          expect(response.body.errors).to.have.property('senderId')
          expect(response.body.errors).to.have.property('receiverIds')
          expect(response.body.errors).to.have.property('message')
          expect(response.body.errors).to.have.property('status')
          expect(response.body).not.to.have.property('newSMSRecord')
          done()
        })
    })
    it('should return an error if senderId does not exist', (done) => {
      const newSmsRecord = ShortMessageFactory.build()
      server
        .post('/api/v1/sms/create')
        .send(newSmsRecord)
        .end((error, response) => {
          expect(response.status).to.equal(400)
          expect(response.body).not.to.have.property('newSMSRecord')
          expect(response.body).to.have.property('message')
          done()
        })
    })
    it('should return an error if a wrong message status is sent', (done) => {
      const [contact1, contact2, contact3] = createdContacts
      const newMessageRecord = ShortMessageFactory.build({
        senderId: contact1.id,
        receiverIds: `${contact2.id},${contact3.id}`,
        status: 'terminated'
      })
      server
        .post('/api/v1/sms/create')
        .send(newMessageRecord)
        .end((error, response) => {
          expect(response.status).to.equal(500)
          expect(response.body.message).to.equal('Validation error: message status can only be defined as: failed, pending, or  sent')
          done()
        })
    })
    it('should create a new sms record in the database if sms details are valid', (done) => {
      const [contact1, contact2, contact3] = createdContacts
      const newMessageRecord = ShortMessageFactory.build({
        senderId: contact1.id,
        receiverIds: `${contact2.id},${contact3.id}`,
        status: 'sent'
      })
      server
        .post('/api/v1/sms/create')
        .send(newMessageRecord)
        .end((error, response) => {
          const { newSMSRecord } = response.body
          expect(response.status).to.equal(201)
          expect(newSMSRecord).not.to.be.undefined
          expect(newSMSRecord.status).to.equal(newMessageRecord.status)
          expect(newSMSRecord.senderId).to.equal(newMessageRecord.senderId)
          expect(newSMSRecord.receiverIds).to.equal(newMessageRecord.receiverIds)
          done()
        })
    })
  })

  describe('GET /api/v1/sms', () => {
    it('should return all sms record', (done) => {
      server
        .get('/api/v1/sms/all')
        .end((error, response) => {
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('allMessages')
          expect(response.body.allMessages).to.have.lengthOf(1)
          done()
        })
    })
  })
})
