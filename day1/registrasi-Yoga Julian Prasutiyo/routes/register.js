var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //http://<webserver>/demo
  res.render('registerForm', { title: 'Registrasi' }); //render view
});

/* POST home page. */
router.post('/', function(req, res, next) { //http://<webserver>/demo
    var setuju = "Tidak setuju"
    if (req.body.agree === "on") 
        setuju = "Setuju"
    
    
    res.render('regisTampil', { 
        title: 'Registrasi',
        nama: req.body.nama,
        email: req.body.email,
        address: req.body.address,
        gender: req.body.gender,
        job: req.body.job,
        agree: setuju
    }); //render view
  });


module.exports = router;
