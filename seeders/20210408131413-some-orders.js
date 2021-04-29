"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          shippingAddress: "User Address",
          completed: true,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shippingAddress: "User Address",
          completed: true,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shippingAddress: "User Address",
          completed: false,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shippingAddress: "User Address",
          completed: false,
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
