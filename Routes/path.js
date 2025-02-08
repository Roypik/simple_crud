const express = require("express");
const router = express.Router();

const get_user = require("../custom_api/get_user");
const reister_user = require("../custom_api/register");

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

// == CRUD ==
router.post("/register", async (req, res) => {
  var result = await reister_user(req);
  res.json(result);
});

router.get("/users", async (req, res) => {
  var result = await get_user();
  res.json(result);
});

module.exports = router;
