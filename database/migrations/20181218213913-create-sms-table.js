export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('sms', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    receiverId: {
      type: Sequelize.STRING
    },
    senderId: {
      type: Sequelize.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'contacts',
        key: 'id'
      }
    },
    message: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM,
      values: ['Pending', 'Sent', 'Failed'],
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}
export function down(queryInterface) {
  return queryInterface.dropTable('sms')
}

export default { up, down }
