const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Recipe = require("../models").recipe;
const User = require("../models").user;
const Ingredient = require("../models").ingredient;
const Tag = require("../models").tag;
const UserRecipe = require("../models").userRecipe;

const router = new Router();

//Delete a favorite
router.delete("/recipes/:id", authMiddleware, async (req, res) => {
  const userIdNeeded = req.user.id;
  // console.log("(Delete)id test user:", userIdNeeded)
  if (!userIdNeeded) {
    res
      .status(401)
      .send("Sorry you are unauthorized, Login/Sign-up to authorize yourself");
  }

  const recipeIdNeeded = parseInt(req.params.id);
  // console.log("(Delete)id test recipe:", recipeIdNeeded)

  try {
    const favorite = await UserRecipe.findOne({
      where: {
        userId: userIdNeeded,
        recipeId: recipeIdNeeded,
      },
    });
    // console.log("Individual favorite test", favorite)

    if (!favorite) {
      res.status(404).send("No Favorite matched your request");
    }

    const recipeNeeded = await Recipe.findOne({
      where: {
        id: recipeIdNeeded,
      },
    });

    if (!recipeNeeded) {
      res.status(404).send("No recipe found, refresh and try again.");
    }

    favorite.destroy();
    res.status(202).send(recipeNeeded);
  } catch (error) {
    console.log(error.message);
  }
});

//Add a recipe to personal favorite page = Create user favorite === create a row in userRecipe table
router.post("/recipes/:id", authMiddleware, async (req, res, next) => {
  const userIdNeeded = parseInt(req.user.id);
  console.log("id test user:", userIdNeeded);
  if (!userIdNeeded) {
    res
      .status(401)
      .send("Sorry you are unauthorized, Login/Sign-up to authorize yourself");
  }

  // const recipeIdNeeded = parseInt(req.params.id);
  const { id } = req.params;
  console.log("id test recipe:", id);

  try {
    const favorite = await UserRecipe.create({
      recipeId: id,
      userId: userIdNeeded,
    });
    console.log("response test", favorite);
    if (!favorite) {
      res.status(400).send("Favorite couldn't be added, refresh and try again");
    }
    const recipeNeeded = await Recipe.findByPk(id);

    if (!recipeNeeded) {
      res.status(404).send("Recipe with that ID doesn't exist");
    }
    res.status(202).send(recipeNeeded);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

//get favorite recipes
router.get("/", async (req, res, next) => {
  try {
    const userIdNeeded = req.user.id;
    console.log("(GET)id test user:", userIdNeeded);
    if (!userIdNeeded) {
      res
        .status(401)
        .send(
          "Sorry you are unauthorized, Login/Sign-up to authorize yourself"
        );
    }
    const user = await User.findOne({
      include: [Recipe],
      where: {
        id: userIdNeeded,
      },
    });
    // console.log("response test", user)

    if (!user) {
      res.status(404).send("You've got no Favorites");
    }

    res.status(202).send(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
