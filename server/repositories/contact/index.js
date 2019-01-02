import createContact from './createContact'
import listContacts from './listContacts'
import getContactDetails from './getContactDetails'
import updateContact from './updateContact'
import deleteContact from './deleteContact'
import listContactMessages from './listContactMessages'

class ContactRepository {
  static createContact(db, contactDetails) {
    return createContact(db, contactDetails)
  }

  static listContacts(db) {
    return listContacts(db)
  }

  static getContactDetails(db, contactId) {
    return getContactDetails(db, contactId)
  }

  static updateContact(db, contactId, contactUpdate) {
    return updateContact(db, contactId, contactUpdate)
  }

  static deleteContact(db, contactId) {
    return deleteContact(db, contactId)
  }

  static listContactMessages(db, contactId, query) {
    return listContactMessages(db, contactId, query)
  }
}

export default ContactRepository
