const express = require("express");
const router = express.Router();

const get_user = require("../custom_api/get_user");

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  var result = await get_user();
  res.json(result);
});

module.exports = router;
