import isValidId from './isValidId'

const validateSmsField = (field, fieldValue) => {
  if (!fieldValue) {
    return `${field} is required`
  }

  const validations = {
    senderId: isValidId('senderId', fieldValue),
    receiverIds: isValidId('receiverId', fieldValue),
    message: null,
    status: null
  }
  return validations[field]
}

export default validateSmsField
