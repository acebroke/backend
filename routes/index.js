var express = require("express");
var router = express.Router();
require("../models/connection");
const User = require("../models/users");
const { helloUser, Addition } = require("../modules/displayUser");
/* GET home page. */


router.post("/hello/:name", function (req, res) {
  helloUser(req.params.name);
  res.json({ title: "Hello World ! " });
});

router.post("/salut", function (req, res) {
  helloUser(req.body.name);
  res.json({ title: "Hello World ! " });
});

router.post("/signup", function (req, res) {
  console.log(req.body);

  const newUser = new User({
    firstname: req.body.prenom,
    lastname: req.body.nom,
  });

  newUser.save().then((newDoc) => {
    console.log(newDoc);
    res.json({
      result: true,
      message: `${newDoc.firstname} est bien enregistré !!!`,
    });
  });
});

module.exports = router;
