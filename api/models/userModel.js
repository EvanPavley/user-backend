'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter your name'
  },
  email: {
    type: String,
    required: 'Please enter your email'
  },
  updates: {
    type: Boolean,
    default: ['true']'
  },
  location: {
    type: String,
    required: 'Please enter your location'
  },
  bio: {
    type: String,
    required: 'Please enter a bio'
  },
  password: {
    type: String,
    required: 'Please enter your password'
  },
});

module.exports = mongoose.model('Users', UserSchema);
