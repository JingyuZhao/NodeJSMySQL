var db = require("../../../Config/mysqlConfig");
module.exports.addNews = function (req,res,callback) {
    var title = req.body.title;
    var content = req.body.content_text;
    var classId = req.body.classId;
    var currentDate = new Date();
    var content_image_url = req.body.content_image_url;
    var content_video_url = req.body.content_video_url;
    var insertNew = "insert into News(title,content_text,update_time,like_num,read_num,classId,content_image_url,content_video_url) values('"
        +title+"','"+content+"','"+currentDate.toDateString()+"',"+0+","+0+","+classId+",'"+content_image_url+"','"+content_video_url+"')";
    db.query(insertNew,function (err,result) {
       callback(err,result);
    });
};
module.exports.getNews = function (req,res,callback) {
    var currentDate = new Date();
    var queryNews = "select * from News where update_time = '"+currentDate.toDateString()+"'";
    db.query(queryNews,function (err,data) {
        callback(err,data);
    })
}