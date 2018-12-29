import sendSMS from './sendSMS'
import listAllMessages from './listAllMessages'

class SMSRepository {
  static sendSMS(db, newMessageRecord) {
    return sendSMS(db, newMessageRecord)
  }

  static listAllMessages(db) {
    return listAllMessages(db)
  }
}

export default SMSRepository
