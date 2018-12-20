import validateContactField from './validateContactField'
import ObjectHelper from '../../helpers/objectHelper'
import fields from '../../constants/fields'

const { CONTACT_FIELDS } = fields

const isValidContactUpdate = (req, res, next) => {
  const contactUpdate = req.body
  const isUpdateEmpty = ObjectHelper.isEmpty(contactUpdate)

  if (isUpdateEmpty) {
    return res.status(200).send({
      message: 'Nothing to update'
    })
  }

  let errors = {}
  const updateFields = Object.keys(contactUpdate)
  updateFields.forEach((field) => {
    const fieldValue = contactUpdate[field]
    if (CONTACT_FIELDS.includes(field)) {
      errors[field] = validateContactField(field, fieldValue)
    }
  })

  errors = ObjectHelper.removeBooleanKeysFromObject(errors)
  const isEmpty = ObjectHelper.isEmpty(errors)

  if (!isEmpty) {
    return res.status(400).send({
      errors,
      message: 'Updated failed'
    })
  }
  return next()
}

export default isValidContactUpdate
