var express = require('express');
var router = express.Router();

const db = require('../models');
const Todo = db.todos;
const Op = db.Sequelize.Op;

//get all
router.get('/', function(req, res, next) {
  Todo.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    })
  })
});

//create todo
router.post('/', function(req, res, next) {
  var todo = {
    description: req.body.description
  }
  Todo.create(todo)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message
    })
  })
});

//get detail by id
router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  Todo.findByPk(id)
  .then(data => {
    if(data) {
      res.send(data);
    } else {
      // http 404 not found
      res.status(404).send({
        message: "tidak adda ada id=" + id
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

//update 
router.put('/:id', function(req, res, next) {
  const id = req.params.id;

  Todo.update(req.body, {
    where: { id: id}
  })
  .then(num => {
    if(num>0) {
      res.send({message: "data diperbarui"});
    } else {
      // http 404 not found
      res.status(404).send({
        message: "tidak terdapat data dengan id=" + id
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

//delete
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;

  Todo.destroy({
    where: { id: id}
  })
  .then(num => {
    if(num>0) {
      res.send({message: "data sudah dihapus"});
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

module.exports = router;
