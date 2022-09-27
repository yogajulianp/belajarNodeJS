var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http request untuk get, post, put, delete, head
router.get('/hello', function(req, res, next) {
  res.render('hello', { 
    title: 'Express',
    name : 'Mr. Yoga Julian P',
    email: 'abc@gmail.com' 
  });//render view
});

module.exports = router;
