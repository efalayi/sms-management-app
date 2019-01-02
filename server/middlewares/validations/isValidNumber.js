const isValidNumber = (numericValue) => {
  if (Number.isNaN(numericValue)) {
    return false
  }
  return Number.isFinite(numericValue)
}

export default isValidNumber
