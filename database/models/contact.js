export default (sequelize, DataTypes) => {
  const Contact = sequelize.define('contact', {
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
  })

  Contact.options = () => ({
    timestamps: false,
    tableName: 'contacts',
  })

  Contact.associate = (models) => {
    Contact.hasMany(models.receiveHistory, {
      as: 'receivedSMS',
      foreignKey: {
        allowNull: false
      },
    })
    Contact.hasMany(models.sendHistory, {
      as: 'sentSMS',
      foreignKey: {
        allowNull: false
      },
    })
  }

  return Contact
}
