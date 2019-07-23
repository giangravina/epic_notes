var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('notes', {title: 'EpicNotes'});
});


    
   

module.exports = router;
