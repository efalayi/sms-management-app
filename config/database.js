require('@babel/register')
const envVariables = require('./envVariables').default

const DB_DIALECT = 'postgres'
const {
  dbHost, dbName, dbPassword, dbUserName
} = envVariables

const databaseConfig = {
  development: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: DB_DIALECT
  },
  production: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: DB_DIALECT
  },
  test: {
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: DB_DIALECT
  },
}

module.exports = databaseConfig
