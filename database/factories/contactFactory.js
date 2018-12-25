import Chance from 'chance'
import { Factory } from 'rosie'

const chance = new Chance()

const Contact = new Factory()
  .attrs({
    firstName: () => chance.first(),
    lastName: () => chance.last(),
    phoneNumber: () => chance.phone({ formatted: false }),
    createdAt: () => chance.date(),
    updatedAt: () => chance.date()
  })

export default Contact
