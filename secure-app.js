var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
const path = require('path')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
var fs = require('fs')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache', 'html')
app.use(express.static(__dirname + '/public'))

app.listen (3000, function () {
  console.log('Successfully started express application!')
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

var usernamearray = {
  username : 'Catman',
  password : 'Catwoman'
}

// app.use(function (req, res, next) {
//   var loginUser = req.session.
//   next()
// })

app.get('/', function (req, res, next) {
 // if (!authenicated) {
  res.redirect('/Login')})
  // else res.render('home')
// })

app.get('/Login', function (req, res, next) {
  res.render('login')
})
app.post('/Login', function(req, res ) {

var user = req.body.Username
var password = req.body.Password

if (user === usernamearray.username) {
console.log('Successful Match')
}

})
