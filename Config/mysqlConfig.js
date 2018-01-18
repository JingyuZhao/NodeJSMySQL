var mysql = require("mysql");
var pool = mysql.createPool({
   host:"localhost",
   user:"root",
   password:"自己的root账户密码",
    database:"NodeJSDataBase"
});

function query(sql,callback) {
    pool.getConnection(function (err,connection) {
        connection.query(sql,function (error,rows) {
            callback(error,rows);
            connection.release();
        })
    })
}
module.exports.query = query;
