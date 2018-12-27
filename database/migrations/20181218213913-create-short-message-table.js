export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('shortMessages', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    senderId: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'contacts',
        referenceKey: 'id'
      }
    },
    receiverIds: {
      type: Sequelize.STRING,
      allowNull: false
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM,
      values: ['failed', 'pending', 'sent'],
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
  return queryInterface.dropTable('shortMessages')
}

export default { up, down }
