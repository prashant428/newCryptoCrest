const passport = require('passport');

module.exports = function() {
  //routing to user
  const User = require('../models/user');
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //deserializing User using id
  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};