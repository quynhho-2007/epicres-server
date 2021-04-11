const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Ingredient = require("../models").ingredient;
const router = new Router();
//get recipes with ingredients and ???tags
router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({ attributes: ["title"] });
    res.json(ingredients);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
