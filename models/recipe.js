"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsToMany(models.tag, {
        through: "recipeTags",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.ingredient, {
        through: "recipeIngredients",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.order, {
        through: "orderRecipes",
        foreignKey: "recipeId",
      });
    }
  }
  recipe.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.TEXT,
      instruction: DataTypes.TEXT,
      bought: DataTypes.INTEGER,
      timeToCook: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      totalCalories: DataTypes.INTEGER,
      isFavorite: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
