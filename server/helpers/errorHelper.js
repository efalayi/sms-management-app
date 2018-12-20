const createError = (status, message) => {
  const error = new Error()
  error.code = status
  error.message = message
  return error
}

const createServerError = (error) => {
  const dbError = error.errors || error.message || error
  return {
    status: 500,
    dbError,
    message: 'An internal server error occured while processing request'
  }
}

const getError = (error) => {
  const status = error.code || 500
  return {
    status: Number.parseInt(status, 10),
    message: error.message
  }
}

export default {
  createError,
  createServerError,
  getError
}
