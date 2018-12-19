import Sequelize, { Model } from 'sequelize'

class SendHistory extends Model {
  static fields() {
    return {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
      },
      smsId: {
        type: Sequelize.STRING
      },
      senderId: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['sent', 'failed'],
        allowNull: false
      }
    }
  }

  static options() {
    return {
      timestamps: false,
      tableName: 'sendHistory',
    }
  }
}

export default SendHistory
