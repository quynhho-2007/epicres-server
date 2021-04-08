"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipeIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipeIngredient.belongsTo(models.ingredient);
      recipeIngredient.belongsTo(models.recipe);
    }
  }
  recipeIngredient.init(
    {
      ingredientId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipeIngredient",
    }
  );
  return recipeIngredient;
};
