'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//custom validation for email
var validateEmail = function(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email)
};

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter your name',
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    required: 'Please enter your email',
    validate: [validateEmail, 'Please fill a valid email address'],
    minlength: 1,
    maxlength: 50,
  },
  updates: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "New York, NY"
  },
  bio: {
    type: String,
    required: 'Please enter a bio',
    minlength: 1,
    maxlength: 250,
  },
  password: {
    type: String,
    required: 'Please enter your password',
    minlength: 1,
    maxlength: 50,
  },
});

UserSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

module.exports = mongoose.model('Users', UserSchema);
