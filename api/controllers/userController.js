'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_settings = function(req, res) {
  User.find({}, function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

exports.create_a_setting = function(req, res) {
  var new_setting = new User(req.body);
  new_setting.save(function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

exports.update_a_setting = function(req, res) {
  User.findOneAndUpdate({_id: req.params.settingId}, req.body, {new: true}, function(err, setting) {
    if (err)
      res.send(err);
    res.json(setting);
  });
};

exports.delete_a_setting = function(req, res) {
  User.remove({
    _id: req.params.settingId
  }, function(err, setting) {
    if (err)
      res.send(err);
    res.json({ message: 'successfully deleted' });
  });
};
