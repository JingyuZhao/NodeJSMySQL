var express = require('express');
var router = express.Router();
var VersionController = require('../Modules/VersionModule/Controller/VersionController');

router.post('',function (req,res) {
    var systemType = req.body.systemtype;
    VersionController.selectVersion(req,res,function (err,data) {
        var respone = {
            "responeObj":{},
            "msg":"",
            "code":200
        }
        if (err){
            respone["code"] = err.code;
            respone ["msg"] = err.message;
        }else
        {
            if (data.length>0){
                respone["responeObj"]=data[0];
            }

        }
        res.send(respone);
    });
})
module.exports = router;