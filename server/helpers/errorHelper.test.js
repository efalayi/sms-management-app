import { expect } from 'chai'
import ErrorHelper from './errorHelper'

describe('#ErrorHelper', () => {
  describe('#createError', () => {
    it('should create an Error with defined status string and message', () => {
      const customError = ErrorHelper.createError('400', 'Custom message')
      expect(customError.code).to.equal('400')
    })
  })

  describe('#createServerError', () => {
    it('should create an error object with status 500', () => {
      const serverError = ErrorHelper.createServerError()
      expect(typeof serverError).to.equal('object')
      expect(serverError.status).to.equal('500')
      expect(serverError).not.to.have.property('code')
      expect(serverError).to.have.property('message')
    })

    describe('internalServerError', () => {
      it('should be included as a property errors property exists in passed error object', () => {
        const withDbError = {
          errors: ['Some random database error']
        }
        const serverError = ErrorHelper.createServerError(withDbError)
        expect(typeof serverError).to.equal('object')
        expect(serverError.status).to.equal('500')
        expect(serverError).not.to.have.property('code')
        expect(serverError).to.have.property('message')
        expect(serverError).to.have.property('internalServerError')
      })
      it('should be included as a property message property exists in passed error object', () => {
        const error = {
          message: 'Some random server error'
        }
        const serverError = ErrorHelper.createServerError(error)
        expect(typeof serverError).to.equal('object')
        expect(serverError.status).to.equal('500')
        expect(serverError).not.to.have.property('code')
        expect(serverError).to.have.property('message')
        expect(serverError).to.have.property('internalServerError', error.message)
      })
      it('should be included as a property message property exists in passed error object', () => {
        const errorString = 'Some random server error'
        const serverError = ErrorHelper.createServerError(errorString)
        expect(typeof serverError).to.equal('object')
        expect(serverError.status).to.equal('500')
        expect(serverError).not.to.have.property('code')
        expect(serverError).to.have.property('message')
        expect(serverError).to.have.property('internalServerError', errorString)
      })
    })
  })

  describe('#getErrorStatusAndMessage', () => {
    it('should return status and message of parsed Error object', () => {
      const customError = ErrorHelper.createError('409', 'Custom error message')
      const error = ErrorHelper.getErrorStatusAndMessage(customError)
      expect(error).to.have.property('status', 409)
      expect(error).to.have.property('message', 'Custom error message')
    })
    it('should return status as 500 if error object has no status', () => {
      const customError = {
        message: 'Error with no status'
      }
      const error = ErrorHelper.getErrorStatusAndMessage(customError)
      expect(error).to.have.property('status', 500)
      expect(error).to.have.property('message', customError.message)
    })
  })
})
