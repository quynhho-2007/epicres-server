"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          status: "processed",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "shipped",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "sent",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "received",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
