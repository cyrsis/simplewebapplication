var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    // res.render('index', {title: 'Change of the title'});
    var body = req.body;
    console.log(body)

    var username = req.body.email;
    var password = req.body.password;

    if (username == "admin@admin.com" && password == "admin@admin.com") {

        req.session.user = {username:username}
        console.log("vaild");

        res.redirect("/home");

    } else {
        console.log("invaild")
    }

    res.send("Got data")
});

module.exports = router;
