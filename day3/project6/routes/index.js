var express = require('express');
var router = express.Router();

const db = require('../models');
const Product = db.products;
const Op = db.Sequelize.Op;

//get all product
router.get('/product', function(req, res, next) {
  Product.findAll()
  .then(data => {
    res.render('product', { 
      title: 'Daftar Produk',
      products: data,
     });
     //console.log(products);
  })
  .catch(err => {
    res.render('product', { 
      title: 'Daftar Produk',
      products: [],
     });
  })
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  
//get detail by query id
router.get('/productdetail', function(req, res, next) {
  const id = parseInt(req.query.id);

  Product.findByPk(id)
  .then(data => {
    if(data) {
      res.render('productdetail', { 
        title: 'Daftar Produk',
        products: data,
       });

    } else {
      // http 404 not found
      res.render('productdetail', { 
        title: 'Daftar Produk',
        products: {},
       });
    }
  })
  .catch(err => {
    res.render('productdetail', { 
      title: 'Daftar Produk',
      products: {},
     });
  });
});


//detail by params
router.get('/detail/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  Product.findByPk(id)
  .then(data => {
    if(data) {
      res.render('productdetail', { 
        title: 'Daftar Produk',
        products: data,
       });

    } else {
      // http 404 not found
      res.status(404).send({
        message: "tidak ada ada id=" + id
      })
    }
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    });
  });
});

//addProduct
router.get('/addproduct', function(req, res, next) {
  res.render('addProduct', { title: 'Tambah Product' });
});

//add products
router.post('/addproduct', function(req, res, next) {
  var products = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  }
  Product.create(products)
  .then(addData => {
    res.redirect('/product')
   
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    });
  });
});


//delete produck
router.get('/deleteproduct/:id', function(req, res, next) {
  var id = parseInt(req.params.id);

  Product.destroy({
    where: { id: id}
  })
  .then(num => {
    res.redirect('/product')
    // if(num>0) {
    //   res.redirect('/product')
    // } else {
    //   // http 404 not found
    //   res.status(404).send({
    //     message: "tidak ada ada id=" + id
    //   })
    // }
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    });
  });
});

//edit product
router.get('/editproduct/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  Product.findByPk(id)
  .then(dataEdit => {
    if(dataEdit) {
      res.render('editProduct', { 
        title: 'EditProduk',
        products: dataEdit
        // id: dataEdit.id,
        // name: dataEdit.name,
        // quantity: dataEdit.quantity,
        // price: dataEdit.price,
       });

    } else {
      // http 404 not found
      res.redirect('/product')
    }
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    });
  });
});

router.post('/editproduct/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  Product.update(req.body, {
    where: { id: id}
  })
  .then(num => {
    res.redirect('/product'); 
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    });
  });
});

module.exports = router;
