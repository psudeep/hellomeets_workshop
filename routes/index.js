var express = require('express');
var router = express.Router();
var Users = require('../models/Users.js');

/**
 * Controllers (route handlers).
 */
const userController = require('../controllers/user');
// const apiController = require('./controllers/api');
// const contactController = require('./controllers/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hellomeets Workshop' });
});

/* ADD User */
router.post('/signup', userController.postSignup);
router.post('/login', userController.postLogin);

module.exports = router;
