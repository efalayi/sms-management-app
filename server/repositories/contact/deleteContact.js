import getContact from './getContact'
import doesContactExist from '../validations/doesContactExist'
import ErrorHelper from '../../helpers/errorHelper'

const deleteContact = async (db, contactId) => {
  try {
    const validationError = await doesContactExist(db, contactId)
    if (validationError.length) {
      const errorMessage = validationError
      const error = ErrorHelper.createError('404', errorMessage)
      throw (error)
    }
    const contact = await getContact(db, contactId)
    await contact.destroy()
    return contact
  } catch (error) {
    const serverError = error.status ? error : ErrorHelper.getErrorStatusAndMessage(error)
    throw (serverError)
  }
}

export default deleteContact
