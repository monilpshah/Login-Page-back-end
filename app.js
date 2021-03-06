var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Tasks=require('./routes/task_route');
var Products=require('./routes/product_route');
var Students=require('./routes/student_route');
var Category=require('./routes/category_route');
var User1=require('./routes/user1_route');
var User=require('./routes/user_route');
var similar=require('./routes/similarproducts');

var Product_tbl=require('./routes/product_tbl_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Tasks',Tasks);
app.use('/Products',Products);
app.use('/Students',Students);
app.use('/Category',Category);
app.use('/userlogin',User1);
app.use('/user',User);
app.use('/product_tbl',Product_tbl);
app.use('/similarproduct',similar);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
