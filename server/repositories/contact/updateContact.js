import ErroHelper from '../../helpers/errorHelper'
import getContact from './getContact'

const updateContact = async (contactModel, contactId, contactUpdate) => {
  const contact = await getContact(contactModel, contactId)
  try {
    const updatedContact = await contact.update(contactUpdate)
    return updatedContact.dataValues
  } catch (error) {
    const serverError = ErroHelper.createServerError(error)
    throw (serverError)
  }
}

export default updateContact
