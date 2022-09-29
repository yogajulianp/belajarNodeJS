var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'GET: hello node js' });
});

router.post('/', function(req, res, next) {
    res.json({ message: 'POST: hello node js' });
});

router.put('/', function(req, res, next) {
    res.json({ message: 'UPDATE: hello node js' });
});

router.delete('/', function(req, res, next) {
    res.json({ message: 'delete: hello node js' });
});


module.exports = router;
