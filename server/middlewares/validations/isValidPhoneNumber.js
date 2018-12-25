const isValidPhoneNumber = (field, value) => {
  const regex = /^[0-9]{5,}$/
  if (regex.test(value)) {
    return true
  }
  return `${value} is not a valid ${field}.`
}

export default isValidPhoneNumber
