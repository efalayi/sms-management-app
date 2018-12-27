import ErrorHelper from '../../helpers/errorHelper'

const getContact = async (db, contactId) => {
  try {
    const contact = await db.contact.findById(contactId)
    if (!contact) {
      const error = ErrorHelper.createError('404', `ContactId: ${contactId} does not exist in the database`)
      throw (error)
    }
    return contact
  } catch (error) {
    throw (ErrorHelper.getErrorStatusAndMessage(error))
  }
}

export default getContact
