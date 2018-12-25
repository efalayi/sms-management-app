import getContact from './getContact'

const deleteContact = async (contactModel, contactId) => {
  const contact = await getContact(contactModel, contactId)
  await contact.destroy()
  return contact
}

export default deleteContact
