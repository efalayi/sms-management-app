import dotenv from 'dotenv'

dotenv.config()

const envVariables = {
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUserName: process.env.DB_USERNAME,
  environment: process.env.NODE_ENV,
  port: process.env.PORT
}

export default envVariables
