export default (sequelize, DataTypes) => {
  const sms = sequelize.define('sms', {
    receiverId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senderId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'sent', 'failed'),
    }
  }, {})
  return sms
}
