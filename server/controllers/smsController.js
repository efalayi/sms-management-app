import Models from '../../database/models'
import SMSRepository from '../repositories/sms'

const db = Models

class SMSController {
  static async sendSMS(req, res) {
    try {
      await SMSRepository.sendSMS(db, req.body)
      res.send({
        message: 'Send a new sms'
      })
    } catch (error) {
      res.status(error.status).send({
        message: `${error.message}`
      })
    }
  }
}

export default SMSController
