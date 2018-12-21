import ErrorHelper from '../../helpers/errorHelper'

const listContacts = async (contactModel) => {
  try {
    const contactList = await contactModel.findAndCountAll({
      raw: true
    })
    return contactList
  } catch (error) {
    throw (ErrorHelper.getError(error))
  }
}

export default listContacts
