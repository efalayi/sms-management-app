import ErrorHelper from '../../helpers/errorHelper'

const listContacts = async (contactModel) => {
  try {
    const contacts = await contactModel.findAndCountAll({
      raw: true
    })
    return contacts
  } catch (error) {
    throw (ErrorHelper.getError(error))
  }
}

export default listContacts
