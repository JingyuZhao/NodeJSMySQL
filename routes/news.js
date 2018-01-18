var express = require('express');
var router = express.Router();
var newsController = require("../Modules/NewsModule/Controller/NewsController");

/*Post user listing*/
router.post('/addNews',function (req,res) {
    newsController.addNews(req,res,function (err,data) {
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
            respone ["msg"] = '插入成功';
        }
        res.send(respone);
    });
});
router.post('/getNews',function (req,res) {
    newsController.getNews(req,res,function (err,data) {
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
            respone["responeObj"]=data;
        }
        res.send(respone);
    })
})
module.exports = router;