import pushId from 'pushid'
import ErrorHelper from '../../helpers/errorHelper'
import validateSenderAndReceiverIds from '../validations/validateSenderandReceiverIds'

const RECEIVED_MESSAGE_STATUSES = ['sent']

const createReceiveHistory = async (db, receiverIds, sms) => {
  const history = receiverIds.map(receiverId => ({
    shortMessageId: sms.id,
    receiverId
  }))
  await db.receiveHistory.bulkCreate(history)
}

const createSendHistory = async (db, senderId, sms) => {
  await db.sendHistory.create({
    shortMessageId: sms.id,
    senderId,
    status: sms.status
  })
}

const updateHistory = async (db, senderId, receiverIds, createdSMS) => {
  await createSendHistory(db, senderId, createdSMS)
  if (RECEIVED_MESSAGE_STATUSES.includes(createdSMS.status)) {
    await createReceiveHistory(db, receiverIds, createdSMS)
  }
}

const createSmsRecord = async (db, newMessageRecord) => {
  const {
    senderId, receiverIds, message, status
  } = newMessageRecord
  try {
    const receiverIdsArray = receiverIds.split(',')
    const validationErrors = await validateSenderAndReceiverIds(db, senderId, receiverIdsArray)
    if (validationErrors.length) {
      const errorMessage = validationErrors.join(', ')
      const error = ErrorHelper.createError('400', errorMessage)
      throw (error)
    }
    const smsId = pushId()
    const createdSMS = await db.shortMessage.create({
      id: smsId,
      senderId,
      receiverIds,
      message,
      status: status.toLowerCase()
    })
    await updateHistory(db, senderId, receiverIdsArray, createdSMS)
    return createdSMS
  } catch (error) {
    const errorMessage = ErrorHelper.getErrorStatusAndMessage(error)
    throw (errorMessage)
  }
}

export default createSmsRecord
