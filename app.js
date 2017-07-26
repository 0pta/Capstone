if (process.env.NODE_ENV !== 'production') { require('dotenv').load() }

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const oauthServer = require('oauth2-server')
const util = require('util')
const cloudinary = require('cloudinary')

const index = require('./server/routes/index')
const users = require('./server/routes/users')
const sessions = require('./server/routes/sessions')

const app = express()


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  name: '',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, 'public')))

cloudinary.config({
  cloud_name: 'dnqlnjcaf',
  api_key: '714654525486879',
  api_secret: 'LGLySoqLysn8QR632dEoMkw-TvE'
})

// routes

app.use('/api', index)
app.use('/api/users', users)
app.use('/api/sessions', sessions)

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log(err)
  res.json({ err: err.message });
  // res.render('error')
})

module.exports = app
