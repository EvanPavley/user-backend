/*
User Model:
The server for the userSettings backend using Express
***
The code below defines the sever, what port it is running on, how the incomeing requests are parsed and more.
*/

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb');

// using cors
var cors = require('cors')
app.use(cors());
app.options('*', cors());

// using bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('User settings API server started on: ' + port);
