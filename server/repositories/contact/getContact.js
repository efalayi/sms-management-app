import ErrorHelper from '../../helpers/errorHelper'

const getContact = async (contactModel, contactId) => {
  try {
    const contact = await contactModel.findById(contactId)
    if (!contact) {
      const error = ErrorHelper.createError('404', 'Contact does not exist')
      throw (error)
    }
    return contact
  } catch (error) {
    throw (ErrorHelper.getError(error))
  }
}

export default getContact
