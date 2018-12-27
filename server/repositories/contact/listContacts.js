import ErrorHelper from '../../helpers/errorHelper'

const listContacts = async (db) => {
  try {
    const contactList = await db.contact.findAndCountAll({
      raw: true
    })
    return contactList
  } catch (error) {
    throw (ErrorHelper.getErrorStatusAndMessage(error))
  }
}

export default listContacts
