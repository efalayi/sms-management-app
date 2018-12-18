import dotenv from 'dotenv'

dotenv.config()

const envVariables = {
  environment: process.env.NODE_ENV,
  PORT: process.env.PORT
}

export default envVariables
