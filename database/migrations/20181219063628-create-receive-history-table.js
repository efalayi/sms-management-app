export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('receiveHistory', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    shortMessageId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'shortMessages',
        referenceKey: 'id',
      },
      onDelete: 'cascade',
    },
    receiverId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'contacts',
        referenceKey: 'id',
      },
      onDelete: 'cascade',
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
  return queryInterface
    .dropTable('receiveHistory')
}

export default { up, down }
