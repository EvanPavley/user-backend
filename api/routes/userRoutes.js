'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // user Routes
  app.route('/userSettings')
    .get(user.list_all_settings);
    .post(user.create_a_setting);
    .put(user.update_a_setting);

};
