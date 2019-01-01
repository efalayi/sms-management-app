import pushID from 'pushid'
import ErrorHelper from '../../helpers/errorHelper'

const createContact = async (db, contactDetails) => {
  const contactId = pushID()
  const { firstName, lastName, phoneNumber } = contactDetails
  try {
    const [contact, created] = await db.contact.findOrCreate({
      where: {
        phoneNumber
      },
      defaults: {
        id: contactId,
        firstName,
        lastName,
        phoneNumber
      },
      raw: true
    })
    if (!created) {
      const error = ErrorHelper.createError('409', 'Contact phone number already exists in the database')
      throw (error)
    }
    return contact
  } catch (error) {
    const errorMessage = ErrorHelper.getErrorStatusAndMessage(error)
    throw (errorMessage)
  }
}

export default createContact
