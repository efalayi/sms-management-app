import Models from '../../database/models'
import ContactRepository from '../repositories/contact'

const db = Models

class ContactController {
  static async createContact(req, res) {
    const contactDetails = req.body
    try {
      const contact = await ContactRepository.createContact(db, contactDetails)
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
      const { count, rows } = await ContactRepository.listContacts(db)
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
      const contact = await ContactRepository.getContactDetails(db, contactId)
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
        db, contactId, contactUpdate
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
        db, contactId
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

  static async listContactMessages(req, res) {
    const { contactId } = req.params
    try {
      const contactMessages = await ContactRepository.listContactMessages(
        db, contactId, req.query
      )
      res.status(200).send({
        contact: contactMessages,
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }
}


export default ContactController
