import Sequelize, { Model } from 'sequelize'

class ReceiveHistory extends Model {
  static fields() {
    return {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      smsId: {
        type: Sequelize.STRING
      },
      receiverId: {
        type: Sequelize.STRING
      }
    }
  }

  static options() {
    return {
      timestamps: false,
      tableName: 'receiveHistory',
    }
  }
}

export default ReceiveHistory
