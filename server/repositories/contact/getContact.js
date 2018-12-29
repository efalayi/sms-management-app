const getContact = async (db, contactId) => {
  const contact = await db.contact.findByPk(contactId)
  return contact
}

export default getContact
