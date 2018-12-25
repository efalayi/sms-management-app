import Models from '../../database/models'
import ContactRepository from '../repositories/contact'

const Contact = Models.contact

class ContactController {
  static async createContact(req, res) {
    const contactDetails = req.body
    try {
      const contact = await ContactRepository.createContact(Contact, contactDetails)
      res.status(201).send({
        contact,
        message: 'Contact was successfully created'
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }

  static async listContacts(req, res) {
    try {
      const { count, rows } = await ContactRepository.listContacts(Contact)
      res.status(200).send({
        count,
        contacts: rows
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }

  static async getContactDetails(req, res) {
    const { contactId } = req.params
    try {
      const contact = await ContactRepository.getContactDetails(Contact, contactId)
      res.status(200).send({
        contact
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }

  static async updateContact(req, res) {
    const { contactId } = req.params
    const contactUpdate = req.body
    try {
      const updatedContact = await ContactRepository.updateContact(
        Contact, contactId, contactUpdate
      )
      res.status(200).send({
        contact: updatedContact,
        message: 'Contact was successfully updated'
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }

  static async deleteContact(req, res) {
    const { contactId } = req.params
    try {
      const deletedContact = await ContactRepository.deleteContact(
        Contact, contactId
      )
      res.status(200).send({
        contact: deletedContact,
        message: `Contact ${deletedContact.id} was successfully deleted`
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }
}


export default ContactController
