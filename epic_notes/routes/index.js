var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Epic Notes', header: 'Welcome to our page!' });
});

module.exports = router;
