import Sequelize, { Model } from 'sequelize'

class Contact extends Model {
  static fields() {
    return {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: { msg: 'contactId should not be empty' },
        },
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'firstName should not be empty',
          },
        },
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'lastName should not be empty',
          },
        },
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'phoneNumber should not be empty',
          },
        },
      }
    }
  }

  static options() {
    return {
      timestamps: false,
      tableName: 'contacts',
    }
  }

  static associate(models) {
    Contact.hasMany(models.ReceiveHistory, {
      as: 'receivedSMS',
      foreignKey: {
        allowNull: false
      },
      // onDelete: 'CASCADE',
    })
    Contact.hasMany(models.SendHistory, {
      as: 'sentSMS',
      foreignKey: {
        allowNull: false
      },
      // onDelete: 'CASCADE',
    })
  }
}

export default Contact
