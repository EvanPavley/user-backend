/*
User Controller:
The controller for the userSettings backend using Mongoose
***
The code below defines the functionality of the user settings, how they will interact with the database:
GET, POST, PUT and DELETE
*/

'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

//GET all the settings
exports.list_all_settings = function(req, res) {
  User.find({}, function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

//POST the new settings
exports.create_a_setting = function(req, res) {
  var new_setting = new User(req.body);
  new_setting.save(function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

//PUT to update the existing settings at the id
exports.update_a_setting = function(req, res) {
  User.findOneAndUpdate({_id: req.params.settingId}, req.body, {new: true}, function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

//DELETE to clear the existing settings at the id
exports.delete_a_setting = function(req, res) {
  User.remove({
    _id: req.params.settingId
  }, function(err, setting) {
    if (err)
      res.send(err);
    res.json({ message: 'successfully deleted' });
  });
};
