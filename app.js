var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/PruebaAlexis';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection error:'));


const jwt = require('jsonwebtoken');


var coursesRouter = require('./Routes/Coursesrouter');
var usersRouter = require('./Routes/usersroute');
var loginRouter = require('./Routes/Loginroute');
var enrollmentRouter = require('./Routes/enrollmentRoter');
var pagesRouter = require('./Routes/PagesRoute')


var app = express();
app.set('secretKey', 'prueba1234');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/courses', validar,coursesRouter);
app.use('/api/users',validar, usersRouter);
app.use('/api/enrollment',validar, enrollmentRouter);
app.use('/api/pages', validar,pagesRouter);
app.use('/api/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


function validar(req, res, next){
  jwt.verify(req.headers['tokenkey'], req.app.get('secretKey'), function(err, decoded){
   if(err){
       res.json({status: 'error', message: err.message, data: null});
   }else{
     console.log('jwt verificado: ');
     next(); 
   }
  });

}

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
