import doesContactExist from './doesContactExist'
import ObjectHelper from '../../helpers/objectHelper'

const validateReceiverIds = async (db, senderId, receiverIds) => {
  const validationResult = await Promise.all(
    receiverIds.map((receiverId) => {
      if (senderId === receiverId) {
        return 'senderId and receiverId should not be the same'
      }
      return doesContactExist(db, receiverId)
    })
  )
  const errors = ObjectHelper.removeBooleanValuesFromArray(validationResult)
  if (errors) {
    return errors
  }
  return true
}

export default validateReceiverIds
