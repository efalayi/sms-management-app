export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('receiveHistory', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    smsId: {
      type: Sequelize.STRING,
      references: {
        model: 'sms',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    receiverId: {
      allowNull: false,
      type: Sequelize.STRING,
      references: {
        model: 'contacts',
        key: 'id'
      },
      onDelete: 'CASCADE',
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
  return queryInterface.dropTable('receiveHistory')
}

export default { up, down }
