var express = require("express");
var router = express.Router();

var users = require("./routes/users");
var index = require("./routes/index");

router.use("/user",users);
router.use("/",index);

module.exports = router;