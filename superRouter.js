var express = require("express");
var router = express.Router();

var users = require("./routes/users");
var index = require("./routes/index");
var version = require('./routes/version');

router.use("/user",users);
router.use("/",index);
router.use('/update',version);

module.exports = router;