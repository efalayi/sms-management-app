import Sequelize from 'sequelize'

class Contact extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: { msg: 'contactId should not be empty' },
        },
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'firstName should not be empty',
          },
        },
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'lastName should not be empty',
          },
        },
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'phoneNumber should not be empty',
          },
        },
      }
    }, {
      timestamps: true,
      tableName: 'contacts',
      sequelize
    })
  }

  static associate(models) {
    Contact.hasMany(models.receiveHistory, {
      as: 'receivedMessages',
      foreignKey: 'receiverId',
      sourceKey: 'id',
    })
    Contact.hasMany(models.sendHistory, {
      as: 'sentMessages',
      foreignKey: 'senderId',
      sourceKey: 'id',
    })
  }
}

export default Contact
