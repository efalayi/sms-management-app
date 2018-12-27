import isValidNumber from './isValidNumber'

const isValidId = (idType, id) => {
  const contactId = Number.parseInt(id, 10)
  if (isValidNumber(contactId)) {
    return `${id} is not a valid ${idType}`
  }
  return true
}

export default isValidId
