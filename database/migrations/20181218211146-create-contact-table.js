export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('contacts', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phoneNumber: {
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
  return queryInterface.dropTable('contacts')
}

export default { up, down }
