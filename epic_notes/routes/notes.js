var express = require('express');
var router = express.Router();
// backend: listen for command request
//    router.get('/route', callback( ) )
//    router.post('url', callback( ) ) 
router.get('/', function(req, res, next){
	res.render('notes', {title: 'EpicNotes'});
});

router.get('/notes', function(req, res, next) {
	// var n = [
	// 	{title: "Music Dreams", note: "I love the stars"},
	// 	{title: "To-Do List", note: "I must place the cat on the log"},
	// 	{title: "Homework", note: "Math is lame, but trig must be done..."}
	// 	]
	var data = {note: $.get("#exampleFormControlTextarea1").val()};
	$("#exampleFormControlTextarea1").val();
	res.render('/notes');
});

router.post('/notes', function (req, res, next) {

      $("#exampleFormControlTextarea1").val();
	res.render('/notes');
});
    
   

module.exports = router;
