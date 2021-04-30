const express = require("express");
const app = express();

// const corsMiddleWare = require("cors");
const loggerMiddleWare = require("morgan");

const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const recipeRouter = require("./routers/recipe");
const ingredientRouter = require("./routers/ingredient");
const tagRouter = require("./routers/tag");
const userRecipesFavoritesRouter = require("./routers/userRecipesFavorites");
const authMiddleWare = require("./auth/middleware");

const cors = require("cors");
app.use(cors());
app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
// app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

//Routes

app.use("/", authRouter);
app.use("/recipes", recipeRouter);
app.use("/ingredients", ingredientRouter);
app.use("/tags", tagRouter);
app.use("/favorites", userRecipesFavoritesRouter);

// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express");
});

// Listen for connections on specified port (default is port 4000)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
