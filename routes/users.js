var express = require('express');
var router = express.Router();
var userController = require("../Modules/UserModule/Controller/UserController");

/* GET users listing. */
router.get('/register', function(req, res, next) {
  userController.registerUser(req,res,function (err,data) {
      if (err){
          res.send({"Hello":"World"});
      }else{
          res.send(data);
      }
  })
});

router.get("/getUserInfo",function (req,res,next) {
    userController.selectionUser(req,res,function (err,data) {
        if (err){
            res.send({"Hello":"World"});
        }else{
            res.send(data);
        }
    })
})

module.exports = router;
