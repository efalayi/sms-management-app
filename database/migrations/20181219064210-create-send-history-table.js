export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('sendHistory', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    smsId: {
      type: Sequelize.STRING
    },
    senderId: {
      type: Sequelize.STRING,
      references: {
        model: 'contacts',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    status: {
      type: Sequelize.ENUM,
      values: ['Sent', 'Failed'],
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
