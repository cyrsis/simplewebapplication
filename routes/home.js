var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');

    if (req.session.user) {
        var sessionUser = req.session.user;
        res.render("Welcome", {user: sessionUser.username})
    } else {
        res.render("index",{message:"Please login with vaild Credential"})
    }


});

module.exports = router;
