import isValidNumber from './isValidNumber'

const isValidContactId = (req, res, next) => {
  const contactId = Number.parseInt(req.params.contactId, 10)
  if (isValidNumber(contactId)) {
    return res.status(400).send({
      message: 'ContactId should be a string'
    })
  }
  return next()
}

export default isValidContactId
