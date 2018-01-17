var express = require('express');
var router = express.Router();
var userController = require("../Modules/UserModule/Controller/UserController");

/*Post user listing*/
router.post('/register',function (req,res) {
    userController.registerUser(req,res,function (err,data) {
        var respone = {
            "responeObj":{},
            "msg":"",
            "code":200
        }
        if (err){
            respone["code"] = err.errno;
            respone ["msg"] = err.sqlMessage;
        }else
        {
            if (data.length>0){
                respone["responeObj"]=data[0];
            }
            respone ["msg"] = '注册成功';
        }
        res.send(respone);

    })
})

router.post("/getUserInfo",function (req,res,next) {
    userController.selectionUser(req,res,function (err,data) {
        var respone = {
            "responeObj":{},
            "msg":"",
            "code":200
        }
        if (err){
            respone["code"] = err.errno;
            respone ["msg"] = err.sqlMessage;
        }else
        {
            if (data.length>0){
                respone["responeObj"]=data[0];
                respone ["msg"] = '登录成功';
            }else {
                respone ["msg"] = '您输入的信息错误！';
            }

        }
        res.send(respone);
    })
})

module.exports = router;
