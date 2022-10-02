var express = require('express');
var router = express.Router();

//tambah
router.post('/tambah', function(req, res, next) {
    var hasil = {
        bil1: req.body.bil1,
        bil2: req.body.bil2,
        hasil: req.body.bil1 + req.body.bil2
    }
    res.json(hasil);
});

//kurang
router.post('/kurang', function(req, res, next) {
    var hasil = {
        bil1: req.body.bil1,
        bil2: req.body.bil2,
        hasil: req.body.bil1 - req.body.bil2
    }
    res.json(hasil);
});

//kali
router.post('/perkalian', function(req, res, next) {
    var hasil = {
        bil1: req.body.bil1,
        bil2: req.body.bil2,
        hasil: req.body.bil1 * req.body.bil2
    }
    res.json(hasil);
});

//bagi
router.post('/pembagian', function(req, res, next) {
    var hasil = {
        bil1: req.body.bil1,
        bil2: req.body.bil2,
        hasil: req.body.bil1 / req.body.bil2
    }
    res.json(hasil);
});

router.put('/', function(req, res, next) {
    res.json({ message: 'UPDATE: hello node js' });
});

router.delete('/', function(req, res, next) {
    res.json({ message: 'delete: hello node js' });
});


module.exports = router;
