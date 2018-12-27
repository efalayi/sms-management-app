import getContact from './getContact'

const getContactDetails = async (db, contactId) => {
  const contact = await getContact(db, contactId)
  return contact.dataValues
}

export default getContactDetails
