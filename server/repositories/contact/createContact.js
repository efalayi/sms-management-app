import pushID from 'pushid'
import ErrorHelper from '../../helpers/errorHelper'

const createContact = async (contactModel, contactDetails) => {
  const contactId = pushID()
  const { firstName, lastName, phoneNumber } = contactDetails
  try {
    const [contact, created] = await contactModel.findOrCreate({
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
    const errorMessage = ErrorHelper.getError(error)
    throw (errorMessage)
  }
}

export default createContact
