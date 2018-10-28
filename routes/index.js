var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var counter = req.cookies.counter;
    console.log("Counter string")
    if (counter) {
        counter = Number.parseInt(counter) + 1;
    }else {
        counter= 0;
    }



    console.log("----Counter",counter)
    //Confirm cookies is working
    res.cookie("counter", counter, {maxAge: 90000, httpOnly: true}).render('index', {title: 'Login'});
});

module.exports = router;
