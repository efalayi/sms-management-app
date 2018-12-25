export default (sequelize, DataTypes) => {
  const SMS = sequelize.define('sms', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: 'smsId should not be empty' },
      },
    },
    receiverId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    senderId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Pending', 'Sent', 'Failed'],
      allowNull: false,
    }
  })

  SMS.options = () => ({
    timestamps: false,
    tableName: 'sms',
  })

  SMS.associate = (models) => {
    SMS.belongsTo(models.contact, {
      // onDelete: 'CASCADE',
      as: 'sender',
      foreignKey: 'senderId'
    })
    SMS.hasMany(models.receiveHistory, {
      // onDelete: 'CASCADE',
      as: 'Receivers',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return SMS
}
