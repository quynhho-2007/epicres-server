"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipeTags",
      [
        {
          recipeId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 11,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 12,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 13,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 14,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 15,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 17,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 18,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 16,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 14,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 13,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 17,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 11,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 14,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 16,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 17,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipeTags", null, {});
  },
};
