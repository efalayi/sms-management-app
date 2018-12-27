import Sequelize from 'sequelize'

class ShortMessage extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
      },
      senderId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      receiverIds: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['failed', 'pending', 'sent'],
        allowNull: false,
        validate: {
          isIn: {
            args: [['failed', 'pending', 'sent']],
            msg: 'message status can only be defined as: failed, pending, or  sent',
          },
        },
      }
    }, {
      timestamps: true,
      tableName: 'shortMessages',
      sequelize
    })
  }

  static associate(models) {
    ShortMessage.belongsTo(models.contact, {
      as: 'sender',
      foreignKey: 'senderId'
    })
    ShortMessage.hasMany(models.receiveHistory, {
      onDelete: 'CASCADE',
      as: 'receivers',
      foreignKey: 'shortMessageId',
      sourceKey: 'id',
    })
  }
}

export default ShortMessage
