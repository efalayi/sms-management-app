/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import ObjectHelper from './objectHelper'

describe('#ObjectHelper', () => {
  describe('#isEmpty', () => {
    it('should return a boolean value', () => {
      const isEmpty = ObjectHelper.isEmpty({})
      expect(isEmpty).to.be.a('boolean')
      expect(isEmpty).to.equal(true)
    })
  })

  describe('#removeBooleanKeysFromObject', () => {
    it('should remove boolean key values from object', () => {
      const sampleObject = {
        booleanValue: true,
        stringValue: 'sample',
        numericValue: 10
      }
      const filteredObject = ObjectHelper.removeBooleanKeysFromObject(sampleObject)
      expect(filteredObject).not.to.deep.equal(sampleObject)
      expect(filteredObject).not.to.have.property('booleanValue')
      expect(filteredObject).to.have.property('stringValue')
      expect(filteredObject).to.have.property('numericValue')
    })
  })

  describe('#removeBooleanValuesFromArray', () => {
    it('should remove boolean key values from array', () => {
      const sampleArray = [true, 'sample', 10]
      const filteredArray = ObjectHelper.removeBooleanValuesFromArray(sampleArray)
      expect(filteredArray).not.to.deep.equal(sampleArray)
      expect(filteredArray.includes(true)).to.be.false
    })
  })
})
