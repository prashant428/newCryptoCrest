let express = require('express');
let router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

// /* GET users listing. */
// router.get('/', function(req, res, next) {  
//   res.render('users', { 
//     title: 'Users',
//     userName: req.user ? req.user.username : ''
//   });
// });

// routes sign up page
router.post('/signup', usersController.signup);

// routers sign in page
router.post('/signin', usersController.signin);

//router for user list 
router.get('/userprofile', usersController.userList);
router.get('/get-item/:username', usersController.userByID, usersController.getItem);

// router to edit user profile
router.put('/editprofile/:username',
 passport.authenticate('jwt', { session: false }), 
 usersController.processEditUser);


module.exports = router;
