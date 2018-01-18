var express = require('express');
var router = express.Router();
var newsController = require("../Modules/NewsModule/Controller/NewsController");

/*Post user listing*/
router.post('/addNews',function (req,res) {
    var title = req.body.title;
    var content = req.body.content_text;
    var classId = req.body.classId;
    res.send({'name':title+content+classId});
});
module.exports = router;