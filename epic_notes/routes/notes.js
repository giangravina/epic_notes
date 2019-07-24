var express = require('express');
var router = express.Router();
// backend: listen for command request
//    router.get('/route', callback( ) )
//    router.post('url', callback( ) ) 
router.get('/', function(req, res, next){
	res.render('notes', {title: 'Epic Notes'});
});


router.post('/', function (req, res, next) {

      //$("#exampleFormControlTextarea1").val();
	res.send('success!');
});
    
   

module.exports = router;
