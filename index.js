const express = require("express");
const app = express();

const corsMiddleWare = require("cors");
const loggerMiddleWare = require("morgan");

const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const recipeRouter = require("./routers/recipe");
const authMiddleWare = require("./auth/middleware");

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

//Routes

app.use("/", authRouter);
app.use("/recipes", recipeRouter);
// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express");
});

// Listen for connections on specified port (default is port 4000)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
