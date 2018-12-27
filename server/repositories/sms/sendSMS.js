import pushId from 'pushid'
import ErrorHelper from '../../helpers/errorHelper'
import getContact from '../contact/getContact'

const VALID_HISTORY_STATUSES = ['failed', 'sent']

const createReceiveHistory = async (db, receivers, sms) => {
  const history = receivers.map(receiver => ({
    shortMessageId: sms.id,
    receiverId: receiver.id
  }))
  await db.receiveHistory.bulkCreate(history)
}

const createSendHistory = async (db, sender, sms) => {
  await db.sendHistory.create({
    shortMessageId: sms.id,
    senderId: sender.id,
    status: sms.status
  })
}

const updateHistory = async (db, sender, receivers, createdSMS) => {
  if (VALID_HISTORY_STATUSES.includes(createdSMS.status)) {
    await createReceiveHistory(db, receivers, createdSMS)
    await createSendHistory(db, sender, createdSMS)
  }
}

const getReceiversContact = async (db, senderId, receiverIds) => {
  const receivers = receiverIds.split(',')
  const receiversContact = await Promise.all(
    receivers.map((receiverId) => {
      if (senderId === receiverId) {
        const error = ErrorHelper.createError('409', 'senderId and receiverId should not be the same')
        throw (error)
      } else {
        return getContact(db, receiverId)
      }
    })
  )
  return receiversContact
}

const sendSMS = async (db, newMessageRecord) => {
  const {
    senderId, receiverIds, message, status
  } = newMessageRecord
  try {
    const sender = await getContact(db, senderId)
    const receivers = await getReceiversContact(db, senderId, receiverIds)
    const smsId = pushId()
    const createdSMS = await db.shortMessage.create({
      id: smsId,
      senderId,
      receiverIds,
      message,
      status: status.toLowerCase()
    })
    await updateHistory(db, sender, receivers, createdSMS)
  } catch (error) {
    const errorMessage = ErrorHelper.getErrorStatusAndMessage(error)
    throw (errorMessage)
  }
}

export default sendSMS
