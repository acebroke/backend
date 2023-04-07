var express = require("express");
var router = express.Router();

router.get("/all", function (req, res, next) {
  res.json({ message: "je suis la route all dans articles.js" });
});

module.exports = router;
