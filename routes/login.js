var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});


/* GET home page. */
router.post('/', function (req, res, next) {
    // res.render('index', {title: 'Change of the title'});
    var body = req.body;
    console.log(body)


    //fire and filter for the results

    connection.connect();

    connection.query('SELECT * from user where username="' + username + '" and password="' + password + '"', function (error, results, fields) {
        if (error) throw error;
        console.log('--------The solution is: ', results[0]);
    });

    connection.end();

    var username = req.body.email;
    var password = req.body.password;

    if (username == "admin@admin.com" && password == "admin@admin.com") {

        req.session.user = {username: username}
        console.log("vaild");

        res.redirect("/home");

    } else {
        console.log("invaild")
    }

    res.send("Got data")
});

module.exports = router;
