'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ToDos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE, // Corrected here
        allowNull: true, // This allows null values, meaning the task isn't deleted
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ToDos');
  }
};


// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('ToDos', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       title: {
//         type: Sequelize.STRING
//       },
//       description: {
//         type: Sequelize.TEXT
//       },
//       completed: {
//         type: Sequelize.BOOLEAN
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       deletedAt: {
//         type: Sequelize.DATE,
//         allowNull: true, // This allows null values, meaning the task isn't deleted
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('ToDos');
//   }
// };
