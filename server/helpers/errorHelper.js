const createError = (status, message) => {
  const error = new Error()
  error.code = status
  error.message = message
  return error
}

const createServerError = (error) => {
  const serverError = {
    status: '500',
    message: 'An internal server error occured while processing request'
  }
  if (error) {
    const internalServerError = error.errors || error.message || error
    serverError.internalServerError = internalServerError
  }
  return serverError
}

const getErrorStatusAndMessage = (error) => {
  const status = error.code || error.status || 500
  return {
    status: Number.parseInt(status, 10),
    message: error.message
  }
}

export default {
  createError,
  createServerError,
  getErrorStatusAndMessage
}
