"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userRecipes",
      [
        {
          recipeId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 12,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 18,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userRecipes", null, {});
  },
};
