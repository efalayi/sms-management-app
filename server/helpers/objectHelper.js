const isEmpty = (objectValue) => {
  const objectKeys = Object.keys(objectValue)
  return objectKeys.length === 0
}

const removeBooleanKeysFromObject = (objectValue) => {
  const objectKeys = Object.keys(objectValue)
  const filteredError = {}
  objectKeys.forEach((key) => {
    if (typeof objectValue[key] !== 'boolean') {
      filteredError[key] = objectValue[key]
    }
  })
  return filteredError
}

const removeNullKeysFromObject = (objectValue) => {
  const objectKeys = Object.keys(objectValue)
  const filteredError = {}
  objectKeys.forEach((key) => {
    if (objectValue[key] !== null) {
      filteredError[key] = objectValue[key]
    }
  })
  return filteredError
}

export default {
  isEmpty,
  removeBooleanKeysFromObject,
  removeNullKeysFromObject
}
