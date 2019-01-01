import ErrorHelper from '../../helpers/errorHelper'
import doesContactExist from '../validations/doesContactExist'

const getContactMessages = async (db, contactId, query) => {
  const { type } = query
  const contactIncludeAttributes = {
    received: {
      model: db.receiveHistory,
      as: 'receivedMessages',
      attributes: ['id', 'shortMessageId', 'receiverId'],
    },
    sent: {
      model: db.sendHistory,
      as: 'sentMessages',
      attributes: ['id', 'shortMessageId', 'status'],
    },
  }
  const allIncludeAttributes = Object.values(contactIncludeAttributes)

  const typedIncludeAttribute = contactIncludeAttributes[type]
  const contactMessages = await db.contact.findOne({
    where: {
      id: contactId
    },
    attributes: ['id', 'firstName', 'lastName'],
    include: typedIncludeAttribute ? [typedIncludeAttribute] : allIncludeAttributes
  })

  return contactMessages
}

const listContactMessages = async (db, contactId, query) => {
  try {
    const validationError = await doesContactExist(db, contactId)
    if (validationError.length) {
      const errorMessage = validationError
      const error = ErrorHelper.createError('404', errorMessage)
      throw (error)
    }
    const contactMessages = await getContactMessages(db, contactId, query)
    return contactMessages
  } catch (error) {
    const serverError = error.status ? error : ErrorHelper.getErrorStatusAndMessage(error)
    throw (serverError)
  }
}

export default listContactMessages
