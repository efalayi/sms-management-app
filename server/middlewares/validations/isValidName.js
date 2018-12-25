const isValidName = (field, value) => {
  const regex = /^[a-zA-Z]{2,}$/
  if (regex.test(value)) {
    return true
  }
  return `${value} is not a valid ${field}. Only alphabets are allowed`
}

export default isValidName
