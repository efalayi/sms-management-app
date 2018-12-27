import getContact from './getContact'

const deleteContact = async (db, contactId) => {
  const contact = await getContact(db, contactId)
  await contact.destroy()
  return contact
}

export default deleteContact
