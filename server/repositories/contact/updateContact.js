import ErrorHelper from '../../helpers/errorHelper'
import getContact from './getContact'
import doesContactExist from '../validations/doesContactExist'

const updateContact = async (db, contactId, contactUpdate) => {
  try {
    const validationError = await doesContactExist(db, contactId)
    if (validationError.length) {
      const errorMessage = validationError
      const error = ErrorHelper.createError('404', errorMessage)
      throw (error)
    }

    const contact = await getContact(db, contactId)
    const updatedContact = await contact.update(contactUpdate)
    return updatedContact.dataValues
  } catch (error) {
    const serverError = error.status ? error : ErrorHelper.getErrorStatusAndMessage(error)
    throw (serverError)
  }
}

export default updateContact
