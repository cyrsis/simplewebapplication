var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect();

var username = "admin"
var password = "admin"

connection.query('select * from user where username="' + username + '" and password="' + password + '"', function (error, results, fields) {
if (error) throw error;
console.log('--------The solution is: ', results[0]);
})
;

connection.end();


