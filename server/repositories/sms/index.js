import sendSMS from './sendSMS'

class SMSRepository {
  static sendSMS(smsModel, newMessageRecord) {
    return sendSMS(smsModel, newMessageRecord)
  }
}

export default SMSRepository
