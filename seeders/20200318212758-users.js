"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "testuser",
          lastName: "a",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          address: "Lisan Street 99, 5678AL, Nijmegen, Netherlands",
          isOwner: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          lastName: "b",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          address: "Colombo Street 200, 1234AL, Nijmegen, Netherlands",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Niek",
          lastName: "vd Linden",
          email: "niek@gmail.com",
          password: bcrypt.hashSync("niek", SALT_ROUNDS),
          address: "Willemsweg Street 10, 6789AL, Nijmegen, Netherlands",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Quynh",
          lastName: "Ho",
          email: "quynh@gmail.com",
          password: bcrypt.hashSync("quynh", SALT_ROUNDS),
          address: "Burgermeisterplein 1a, 6789AL, Nijmegen, Netherlands",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Dexter",
          lastName: "vd Linden",
          email: "dexter@gmail.com",
          password: bcrypt.hashSync("dexter", SALT_ROUNDS),
          address: "Burgermeisterplein 1a, 6789AL, Nijmegen, Netherlands",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sammy",
          lastName: "vd Linden",
          email: "sammy@gmail.com",
          password: bcrypt.hashSync("dexter", SALT_ROUNDS),
          address: "Burgermeisterplein 1a, 6789AL, Nijmegen, Netherlands",
          isOwner: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
