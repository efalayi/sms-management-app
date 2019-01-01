const listContacts = async (db) => {
  const contactList = await db.contact.findAndCountAll({
    raw: true
  })
  return contactList
}

export default listContacts
