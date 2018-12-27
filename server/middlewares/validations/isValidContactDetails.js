import ObjectHelper from '../../helpers/objectHelper'
import validateContactField from './validateContactField'
import fields from '../../constants/fields'

const { CONTACT_FIELDS } = fields

const isValidContactDetails = (req, res, next) => {
  const contactDetails = req.body
  let errors = {}

  CONTACT_FIELDS.forEach((field) => {
    const fieldValue = contactDetails[field]
    const fieldError = validateContactField(field, fieldValue)
    errors[field] = fieldError
  })

  errors = ObjectHelper.removeBooleanKeysFromObject(errors)
  const isEmpty = ObjectHelper.isEmpty(errors)

  if (!isEmpty) {
    return res.status(400).send({
      errors
    })
  }

  return next()
}

export default isValidContactDetails
