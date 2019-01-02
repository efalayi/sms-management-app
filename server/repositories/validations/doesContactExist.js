const doesContactExist = async (db, contactId) => {
  const contact = await db.contact.findOne({
    where: {
      id: contactId
    }
  })
  if (!contact) {
    return `ContactId: ${contactId} does not exist in the database`
  }
  return true
}

export default doesContactExist
