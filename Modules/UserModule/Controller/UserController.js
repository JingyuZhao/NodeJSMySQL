var db = require("../../../Config/mysqlConfig");

module.exports.registerUser = function (req,res,callback) {
    var name = req.query.userName;
    var age = req.query.age;
    db.query("insert into user(name,age) values('"+name+"','"+ age +"')",function (err,data) {
        callback(err,data);
    })
};
module.exports.selectionUser = function (req,res,callback) {
    var name = req.query.name;
    var age = req.query.age;
    var sql = "select * from user where name like'"+ name +"'";
    db.query(sql,function (err,data) {
        callback(err,data);
    });
};