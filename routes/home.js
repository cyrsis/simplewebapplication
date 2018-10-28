var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
        // res.send('respond with a resource');

        if (req.session.user) {
            var sessionUser = req.session.user;
            res.render("Welcome", {user: sessionUser.username})
        } else {

            console.log("Invalid Sessions");
            //     res.render("index",{message:"Please login with vaild Credential"})


            res.redirect("/");
        }
    }
);

module.exports = router;

