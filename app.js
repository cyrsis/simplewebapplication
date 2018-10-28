var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Step1
var login = require('./routes/login');
var home = require('./routes/home');

//Sessions
var session = require('express-session')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.engine('html',require('hbs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//Server Session
//Send Cookie(session ID ) by minutes
//Server Side take care the data
app.use(session({
    secret: 'keyboard cat',
    cookie: {maxAge: 600000},
    resave: false,
    saveUninitialized: true,
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);
app.use('/home', home);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
