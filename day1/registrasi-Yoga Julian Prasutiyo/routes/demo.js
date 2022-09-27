var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //http://<webserver>/demo
  res.render('myform', { title: 'Registrasi' }); //render view
});

/* POST home page. */
router.post('/', function(req, res, next) { //http://<webserver>/demo
    res.render('tampilkan', { 
        title: 'Registrasi',
        email: req.body.email,
        address: req.body.address 
    }); //render view
  });


module.exports = router;
