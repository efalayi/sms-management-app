import Sequelize from 'sequelize'
import databaseConfig from '../../config/database'
import ContactModel from './contact'
import ReceiveHistoryModel from './receiveHistory'
import SendHistoryModel from './sendHistory'
import ShortMessageModel from './shortMessage'

const env = process.env.NODE_ENV || 'development'
const config = databaseConfig[env]

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const models = {
  contact: ContactModel.init(sequelize, Sequelize),
  receiveHistory: ReceiveHistoryModel.init(sequelize, Sequelize),
  sendHistory: SendHistoryModel.init(sequelize, Sequelize),
  shortMessage: ShortMessageModel.init(sequelize, Sequelize),
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

const db = {
  ...models,
  sequelize
}

export default db
