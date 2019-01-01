export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('sendHistory', {
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
    senderId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'contacts',
        referenceKey: 'id',
      },
      onDelete: 'cascade',
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
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
  return queryInterface.dropTable('sendHistory')
}

export default { up, down }
