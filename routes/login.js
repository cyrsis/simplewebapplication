var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    // res.render('index', {title: 'Change of the title'});
    var body = req.body;
    console.log(body)
    var username = req.body.username;
    var password = req.body.pass;

    if (username == "admin@admin.com" && password == "admin@admin.com") {
        console.log("vaild");

        res.redirect("/home");

    } else {
        console.log("invaild")
    }

    res.send("Got data")
});

module.exports = router;
