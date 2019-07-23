var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Epic Notes', header: 'Welcome to our page!' });
});


router.get('/login', function(req, res, next){
	res.render('login', {error: null});
});

router.post('/login', function(req, res, next){
	if(req.body.username && req.body.password){
		var data = req.body.password;
		var hash = crypto.createHash('sha256').update(data).digest('hex');

		console.log('hash', hash);

		req.session.authentication = {
			username: req.body.username,
			password: hash
		}

		res.redirect('/');
	} else {
		res.render('login', {error: 'Invalid Username or  Password'})
	}
})

module.exports = router;
