import Sequelize, { Model } from 'sequelize'

class SMS extends Model {
  static fields() {
    return {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: { msg: 'smsId should not be empty' },
        },
      },
      receiverId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senderId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Pending', 'Sent', 'Failed'],
        allowNull: false,
      }
    }
  }

  static options() {
    return {
      timestamps: false,
      tableName: 'sms',
    }
  }

  static associate(models) {
    SMS.belongsTo(models.Contact, {
      // onDelete: 'CASCADE',
      as: 'sender',
      foreignKey: 'senderId'
    })
    SMS.hasMany(models.ReceiveHistory, {
      // onDelete: 'CASCADE',
      as: 'Receivers',
      foreignKey: {
        allowNull: false
      }
    })
  }
}

export default SMS
