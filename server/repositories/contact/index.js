import createContact from './createContact'
import listContacts from './listContacts'
import getContactDetails from './getContactDetails'
import updateContact from './updateContact'
import deleteContact from './deleteContact'

class ContactRepository {
  static createContact(contactModel, contactDetails) {
    return createContact(contactModel, contactDetails)
  }

  static listContacts(contactModel) {
    return listContacts(contactModel)
  }

  static getContactDetails(contactModel, contactId) {
    return getContactDetails(contactModel, contactId)
  }

  static updateContact(contactModel, contactId, contactUpdate) {
    return updateContact(contactModel, contactId, contactUpdate)
  }

  static deleteContact(contactModel, contactId) {
    return deleteContact(contactModel, contactId)
  }
}

export default ContactRepository
