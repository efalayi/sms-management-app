import createSmsRecord from './createSmsRecord'
import listAllMessages from './listAllMessages'

class SMSRepository {
  static createSmsRecord(db, newMessageRecord) {
    return createSmsRecord(db, newMessageRecord)
  }

  static listAllMessages(db) {
    return listAllMessages(db)
  }
}

export default SMSRepository
