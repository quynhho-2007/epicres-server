const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Recipe = require("../models").recipe;

const Ingredient = require("../models").ingredient;
const Tag = require("../models").tag;

const router = new Router();

//Get most popular recipes

router.get("/popular", async (req, res) => {
  const limit = req.query.limit || 4;
  const offset = req.query.offset || 4;
  try {
    const popularRecipes = await Recipe.findAll({
      limit,
      offset,
      order: [["bought", "DESC"]],
      include: [
        { model: Ingredient, attributes: ["title"] },
        { model: Tag, attributes: ["title"] },
      ],
    });
    res.status(200).send(popularRecipes);
  } catch (error) {
    console.log(error.message);
  }
});

//Delete a recipe
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  //console.log(typeof id);
  try {
    const recipeToDelete = await Recipe.findByPk(id);
    //console.log(reservation);
    if (!recipeToDelete) {
      res.status(404).send("recipe not found");
    } else {
      await recipeToDelete.destroy();
      res.status(204).send("recipe removed");
    }
  } catch {
    console.log(error.message);
  }
});

//Update favorite into true
// router.put("/update/:id", async (req, res) => {
//   try {
//     const recipeToFavorite = await Recipe.findByPk(req.params.id);
//     //console.log(user);
//     if (!recipeToFavorite) {
//       res.status(404).send("recipe not found");
//     } else {
//       await recipeToFavorite.update({ isFavorite: true });
//       res.status(200).send({
//         message: "added this recipe to MyFavorites",
//         recipeToFavorite,
//       });
//     }
//   } catch {
//     console.log(error.message);
//   }
// });

// //get recipes with isFavorite: true
// router.get("/favorites", async (req, res, next) => {
//   try {
//     const favoriteRecipes = await Recipe.findAll({
//       where: { isFavorite: true },
//     });
//     console.log("fr", favoriteRecipes);
//     res.json(favoriteRecipes);
//   } catch (e) {
//     next(e);
//   }
// });

//get recipes with ingredients and ???tags
router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        { model: Ingredient, attributes: ["title"] },
        { model: Tag, attributes: ["title"] },
      ],
    });
    res.json(recipes);
  } catch (e) {
    next(e);
  }
});

//get recipe by id for detailed page
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const recipeById = await Recipe.findByPk(id, {
      include: [
        { model: Ingredient, attributes: ["title"] },
        { model: Tag, attributes: ["title"] },
      ],
    });
    res.send(recipeById);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
