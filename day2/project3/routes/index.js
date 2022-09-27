var express = require('express');
var router = express.Router();

var products = [
  {id:1, name: "product 1", quantity: 10, price:2.5},
  {id:2, name: "product 2", quantity: 10, price:2.5},
  {id:3, name: "product 3", quantity: 10, price:2.5},
  {id:4, name: "product 4", quantity: 10, price:2.5},
  {id:5, name: "product 5", quantity: 40, price:8.5},
  {id:6, name: "product 6", quantity: 10, price:2.5},
  {id:7, name: "product 7", quantity: 15, price:9.5},
  {id:8, name: "product 8", quantity: 10, price:2.5},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  
router.get('/product', function(req, res, next) {
  
  res.render('product', { 
    title: 'Daftar Produk',
    products: products,
   });
});

router.get('/productdetail', function(req, res, next) {
  var id = parseInt(req.query.id); //productdetail?id=xxx
  //
  var detailProduct = products[id - 1]

  res.render('productdetail', { 
    title: 'Daftar Produk',
    products: detailProduct,
   });
});

router.get('/detail/:id', function(req, res, next) {
  var id = parseInt(req.params.id); // /detail/2 , detail/3
  //
  var detailProduct = products[id - 1]

  res.render('productdetail', { 
    title: 'Daftar Produk',
    products: detailProduct,
   });
});

module.exports = router;
