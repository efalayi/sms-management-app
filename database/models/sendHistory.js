import Sequelize from 'sequelize'

class SendHistory extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      shortMessageId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      senderId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      modelName: 'sendHistory',
      freezeTableName: true,
      sequelize
    })
  }
}

export default SendHistory
