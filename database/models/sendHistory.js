export default (sequelize, DataTypes) => {
  const SendHistory = sequelize.define('sendHistory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    smsId: {
      type: DataTypes.STRING
    },
    senderId: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM,
      values: ['sent', 'failed'],
      allowNull: false
    }
  })

  SendHistory.options = () => ({
    timestamps: false,
    tableName: 'sendHistory',
  })

  return SendHistory
}
