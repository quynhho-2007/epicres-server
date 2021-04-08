"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderRecipes",
      [
        {
          recipeId: 1,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 15,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          orderId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          orderId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          orderId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          orderId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 18,
          orderId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 16,
          orderId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderRecipes", null, {});
  },
};
