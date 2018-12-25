export default (sequelize, DataTypes) => {
  const ReceiveHistory = sequelize.define('receiveHistory', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    smsId: {
      type: DataTypes.STRING
    },
    receiverId: {
      type: DataTypes.STRING
    }
  })

  ReceiveHistory.options = () => ({
    timestamps: false,
    tableName: 'receiveHistory',
  })

  return ReceiveHistory
}
