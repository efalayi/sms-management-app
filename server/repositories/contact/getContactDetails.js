import getContact from './getContact'

const getContactDetails = async (contactModel, contactId) => {
  const contact = await getContact(contactModel, contactId)
  return contact.dataValues
}

export default getContactDetails
