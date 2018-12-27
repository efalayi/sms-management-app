import { expect } from 'chai'
import pushId from 'pushid'
import request from 'supertest'
import ContactFactory from '../../database/factories/contactFactory'
import app from '../app'

const server = request(app)
const newContactDetails = ContactFactory.build()
let createdContact

describe('#Contact endpoints', () => {
  describe('POST /api/v1/contacts', () => {
    it('should return an error if no contact details are included', (done) => {
      server
        .post('/api/v1/contacts')
        .end((error, response) => {
          expect(response.status).to.equal(400)
          expect(response.body).to.have.deep.property('errors', {
            firstName: 'firstName is required',
            lastName: 'lastName is required',
            phoneNumber: 'phoneNumber is required'
          })
          done()
        })
    })
    it('should create new contact if contact details are included', (done) => {
      server
        .post('/api/v1/contacts')
        .send(newContactDetails)
        .end((error, response) => {
          createdContact = response.body.contact
          expect(response.status).to.equal(201)
          expect(createdContact.firstName).to.equal(newContactDetails.firstName)
          expect(createdContact.lastName).to.equal(newContactDetails.lastName)
          expect(createdContact.phoneNumber).to.equal(newContactDetails.phoneNumber)
          done()
        })
    })
    it('should return an error message if new contact phoneNumber already exits', (done) => {
      server
        .post('/api/v1/contacts')
        .send(newContactDetails)
        .end((error, response) => {
          expect(response.status).to.equal(409)
          expect(response.body.message).to.equal('Contact phone number already exists in the database')
          done()
        })
    })
  })

  describe('GET /api/v1/contacts', () => {
    it('should get all contacts from the database', (done) => {
      server
        .get('/api/v1/contacts')
        .end((error, response) => {
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('count')
          expect(response.body).to.have.property('contacts')
          expect(response.body.contacts).to.be.an('array')
          expect(response.body.contacts).to.have.lengthOf(1)
          done()
        })
    })
  })

  describe('GET /api/v1/contacts/:contactId', () => {
    it('should return an error if contactId is invalid', (done) => {
      server
        .get('/api/v1/contacts/-1234')
        .end((error, response) => {
          expect(response.status).to.equal(400)
          expect(response.body).not.to.have.property('contact')
          expect(response.body.message).to.equal('ContactId should be a string')
          done()
        })
    })
    it('should return an error if contactId does not exist', (done) => {
      const randomContactId = pushId()
      server
        .get(`/api/v1/contacts/${randomContactId}`)
        .end((error, response) => {
          expect(response.status).to.equal(404)
          expect(response.body.message).to.equal(`ContactId: ${randomContactId} does not exist in the database`)
          done()
        })
    })

    it('should return contact with specified contactId', (done) => {
      server
        .get(`/api/v1/contacts/${createdContact.id}`)
        .end((error, response) => {
          const returnedContact = response.body.contact
          expect(response.status).to.equal(200)
          expect(returnedContact.firstName).to.equal(createdContact.firstName)
          expect(returnedContact.lastName).to.equal(createdContact.lastName)
          expect(returnedContact.phoneNumber).to.equal(createdContact.phoneNumber)
          done()
        })
    })
  })

  describe('PUT /api/v1/contacts/:contactId', () => {
    it('should return error if contact does not exist', (done) => {
      const randomContactId = pushId()
      server
        .put(`/api/v1/contacts/${randomContactId}`)
        .send({
          firstName: 'Test',
          lastName: 'Update',
          phoneNumber: '080112345'
        })
        .end((error, response) => {
          expect(response.status).to.equal(404)
          expect(response.body).not.to.have.property('contact')
          expect(response.body.message).to.equal(`ContactId: ${randomContactId} does not exist in the database`)
          done()
        })
    })
    it('should return error if update details are invalid', (done) => {
      server
        .put(`/api/v1/contacts/${createdContact.id}`)
        .send({
          firstName: 'Test',
          lastName: '123456',
          phoneNumber: 'invalidPhoneNumber'
        })
        .end((error, response) => {
          expect(response.status).to.equal(400)
          expect(response.body).to.have.property('errors')
          expect(response.body.message).to.equal('Contact update failed')
          done()
        })
    })
    it('should update contact information in database', (done) => {
      const contactUpdate = {
        firstName: 'Test',
        lastName: 'Update',
        phoneNumber: '080112345'
      }
      server
        .put(`/api/v1/contacts/${createdContact.id}`)
        .send({
          firstName: 'Test',
          lastName: 'Update',
          phoneNumber: '080112345'
        })
        .end((error, response) => {
          const updatedContact = response.body.contact
          expect(response.status).to.equal(200)
          expect(updatedContact.id).to.equal(createdContact.id)
          expect(updatedContact.firstName).to.equal(contactUpdate.firstName)
          expect(updatedContact.lastName).to.equal(contactUpdate.lastName)
          expect(updatedContact.phoneNumber).to.equal(contactUpdate.phoneNumber)
          done()
        })
    })
  })

  describe('DELETE /api/v1/contacts/:contactId', () => {
    it('should return error if contact does not exist', (done) => {
      const randomContactId = pushId()
      server
        .delete(`/api/v1/contacts/${randomContactId}`)
        .end((error, response) => {
          expect(response.status).to.equal(404)
          expect(response.body).not.to.have.property('contact')
          expect(response.body.message).to.equal(`ContactId: ${randomContactId} does not exist in the database`)
          done()
        })
    })
    it('should delete contact from database if contact exists', (done) => {
      server
        .delete(`/api/v1/contacts/${createdContact.id}`)
        .end((error, response) => {
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('contact')
          expect(response.body.message).to.equal(`Contact ${createdContact.id} was successfully deleted`)
          done()
        })
    })
  })
})
