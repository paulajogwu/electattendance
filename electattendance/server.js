var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

//var flash = require("connect-flash");

var session = require('express-session')
var mongodb = require('connect-mongodb-session')(session)
var path = require('path')
var app = express()
app.use(cookieParser())
const exphbs = require('express-handlebars');
const db = require('./db');
const index = require('./routes/index')
const cors = require('cors')

var sessionstore = new mongodb(  {
    uri: 'mongodb://127.0.0.1:27017/attendancesession?connectTimeoutMS=10',
    databaseName: 'attendance',
    collection: 'Sessions'
  },
  
  function(error) {
    // Should have gotten an error
  });

  sessionstore.on('error', function(error) {
  // Also get an error here
})

app.use(
  session({
    secret: 'secret',
    resave: false,

    saveUninitialized: true,
    store: sessionstore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  }),
)

//app.use(path();
//app.use(express.limit(100000000));
app.use(cors())
app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({ extended: true,limit:'100mb' }))

// set up handlebars view engine

var hbs = exphbs.create({
defaultLayout: 'index',
partialsDir: __dirname + '/Views/partials',
extname: '.hbs'
});

app.engine('hbs', hbs.engine);

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  res.locals.session = req.session
  res.locals.flash = req.session.flash
  delete req.session.flash
  next()
})
app.use('/', index)

app.use(function (req, res) {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})
// custom 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

var server = app.listen(8070, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at  http://localhost:' + port)
})
module.exports = app

