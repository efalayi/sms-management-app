import validatReceiverIds from './validateReceiverIds'
import validateSenderId from './validateSenderId'
import ObjectHelper from '../../helpers/objectHelper'

const validateSenderAndReceiverIds = async (db, senderId, receiverIds) => {
  const senderValidationResult = await validateSenderId(db, senderId)
  const receiversValidationResult = await validatReceiverIds(db, senderId, receiverIds)
  const validationResult = [senderValidationResult, ...receiversValidationResult]

  const errors = ObjectHelper.removeBooleanValuesFromArray(validationResult)
  if (errors) {
    return errors
  }
  return true
}

export default validateSenderAndReceiverIds
