import ErroHelper from '../../helpers/errorHelper'
import getContact from './getContact'

const updateContact = async (db, contactId, contactUpdate) => {
  try {
    const contact = await getContact(db, contactId)
    const updatedContact = await contact.update(contactUpdate)
    return updatedContact.dataValues
  } catch (error) {
    const updateError = error.status ? error : ErroHelper.createServerError(error)
    throw (updateError)
  }
}

export default updateContact
