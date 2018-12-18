export default (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'firstName should not be empty',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'lastName should not be empty',
        },
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'phoneNumber should not be empty',
        },
      },
    }
  }, {})
  return contact
}
