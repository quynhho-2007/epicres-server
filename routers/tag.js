const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Tag = require("../models").tag;
const router = new Router();
//get recipes with ingredients and ???tags
router.get("/", async (req, res, next) => {
  try {
    const tags = await Tag.findAll({ attributes: ["title"] });
    res.json(tags);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
