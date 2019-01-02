import fields from '../../constants/fields'
import ObjectHelper from '../../helpers/objectHelper'
import validateSmsField from './validateSmsField'

const { SMS_FIELDS } = fields

const isValidSmsDetails = (req, res, next) => {
  const smsDetails = req.body
  let errors = {}

  SMS_FIELDS.forEach((field) => {
    const fieldValue = smsDetails[field]
    const fieldError = validateSmsField(field, fieldValue)
    errors[field] = fieldError
  })
  errors = ObjectHelper.removeBooleanKeysFromObject(errors)
  errors = ObjectHelper.removeNullKeysFromObject(errors)
  const isEmpty = ObjectHelper.isEmpty(errors)

  if (!isEmpty) {
    return res.status(400).send({
      errors,
      message: 'SMS could not be sent'
    })
  }
  return next()
}

export default isValidSmsDetails
