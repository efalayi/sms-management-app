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
      references: {
        model: 'contacts',
        referenceKey: 'id'
      },
      onDelete: 'cascade',
    },
    receiverIds: {
      type: Sequelize.STRING,
      allowNull: false
    },
    message: {
      type: Sequelize.TEXT,
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
