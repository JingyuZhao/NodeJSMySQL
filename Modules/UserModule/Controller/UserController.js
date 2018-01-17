var db = require("../../../Config/mysqlConfig");
var crypto = require("crypto");

module.exports.registerUser = function (req,res,callback) {
    var real_name = req.body.real_name;
    var phone_num = req.body.phone_num;
    var password = req.body.password;
    var cryptedPassword = cryptPwd(password);
    var insertSql = "insert into User(phone_num,userpsd,real_name) values('"+phone_num+"','"+cryptedPassword+"','"+real_name+"')";
    db.query(insertSql,function (err,data) {
        callback(err,data);
    })
};
module.exports.selectionUser = function (req,res,callback) {
    var phone_num = req.body.phone_num;
    var password = req.body.password;
    var cryptedPassword = cryptPwd(password);
    var sql = "select * from User where phone_num ='"+ phone_num +"'AND userpsd = '"+cryptedPassword+"'";
    db.query(sql,function (err,data) {
        callback(err,data);
    });
};
function cryptPwd(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}