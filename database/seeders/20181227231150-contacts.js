import pushId from 'pushid'
import ContactFactory from '../factories/contactFactory'

const contacts = ContactFactory.buildList(3)

const updatedContacts = contacts.map((contact) => {
  const updatedContact = Object.assign({}, contact)
  updatedContact.id = pushId()
  return updatedContact
})

export function up(queryInterface) {
  return queryInterface.bulkInsert('contacts', updatedContacts, {})
}

export function down(queryInterface) {
  return queryInterface.bulkDelete('contacts', null, {})
}

export default { up, down }
