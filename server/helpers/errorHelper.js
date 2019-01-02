const DEFAULT_SERVER_ERROR_MESSAGE = 'An internal server error occured while processing request'
const DEFAULT_SERVER_ERROR_CODE = '500'

const createError = (status, message) => {
  const error = new Error()
  error.code = status
  error.message = message
  return error
}

const createServerError = (error) => {
  const serverError = {
    status: DEFAULT_SERVER_ERROR_CODE,
    message: DEFAULT_SERVER_ERROR_MESSAGE
  }
  if (error) {
    const internalServerError = error.errors || error.message || error
    serverError.internalServerError = internalServerError
  }
  return serverError
}

const getErrorStatusAndMessage = (error) => {
  const status = error.code || error.status || DEFAULT_SERVER_ERROR_CODE
  return {
    status: Number.parseInt(status, 10),
    message: error.message || DEFAULT_SERVER_ERROR_MESSAGE
  }
}

export default {
  createError,
  createServerError,
  getErrorStatusAndMessage
}
