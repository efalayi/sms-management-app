import Models from '../../database/models'
import SMSRepository from '../repositories/sms'

const db = Models

class SMSController {
  static async createSmsRecord(req, res) {
    try {
      const createdSMSRecord = await SMSRepository.createSmsRecord(db, req.body)
      res.status(201).send({
        newSMSRecord: createdSMSRecord,
        message: 'New SMS record was successfully created'
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }

  static async listAllMessages(req, res) {
    try {
      const allMessages = await SMSRepository.listAllMessages(db)
      res.status(200).send({
        allMessages
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }
}

export default SMSController
