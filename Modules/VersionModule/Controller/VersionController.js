var db = require("../../../Config/mysqlConfig");
module.exports.selectVersion = function (req,res,callback) {
    var appType = req.body.systemtype;
    var versionSql = "select title,updateContent,downloadUrl,maxVersion,minVersion from VersionUpdate where systemType = "+appType;
    db.query(versionSql,function (err,data) {
        callback(err,data);
    })
};