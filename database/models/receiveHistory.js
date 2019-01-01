
import Sequelize from 'sequelize'

class ReceiveHistory extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        shortMessageId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        receiverId: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        timestamps: true,
        modelName: 'receiveHistory',
        freezeTableName: true,
        sequelize
      }
    )
  }
}

export default ReceiveHistory
