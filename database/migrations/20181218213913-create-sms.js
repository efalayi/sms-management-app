export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('sms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    receiverId: {
      type: Sequelize.STRING
    },
    senderId: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
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
