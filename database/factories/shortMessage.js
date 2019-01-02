import Chance from 'chance'
import pushId from 'pushid'
import { Factory } from 'rosie'

const chance = new Chance()

const shortMessage = new Factory()
  .attrs({
    senderId: () => pushId(),
    receiverIds: () => pushId(),
    message: () => chance.paragraph(),
    status: () => chance.pickone(['failed', 'pending', 'sent'])
  })

export default shortMessage
