import isValidName from './isValidName'
import isValidPhoneNumber from './isValidPhoneNumber'

const validateContactField = (field, value) => {
  if (!value) {
    return `${field} is required`
  }

  const validations = {
    firstName: isValidName(field, value),
    lastName: isValidName(field, value),
    phoneNumber: isValidPhoneNumber(field, value),
  }
  return validations[field]
}

export default validateContactField
