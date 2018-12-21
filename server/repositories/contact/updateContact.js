import ErroHelper from '../../helpers/errorHelper'
import getContact from './getContact'

const updateContact = async (contactModel, contactId, contactUpdate) => {
  try {
    const contact = await getContact(contactModel, contactId)
    const updatedContact = await contact.update(contactUpdate)
    return updatedContact.dataValues
  } catch (error) {
    const updateError = error.status ? error : ErroHelper.createServerError(error)
    throw (updateError)
  }
}

export default updateContact
