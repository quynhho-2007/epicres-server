"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "Vietnamese cuisine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chinese cuisine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Thai cuisine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Korean cuisine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Malaysian cuisine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "vegetarian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
