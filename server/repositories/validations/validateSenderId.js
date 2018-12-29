import doesContactExist from './doesContactExist'

const validateSenderId = async (db, senderId) => {
  const error = await doesContactExist(db, senderId)
  if (error) {
    return error
  }
  return true
}

export default validateSenderId
