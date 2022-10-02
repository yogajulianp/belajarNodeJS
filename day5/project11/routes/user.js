var express = require('express');
var router = express.Router();

const db = require('../models');
const User = db.users;
const Op = db. Sequelize.Op;



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET All
router.get('/', function(res, req, next){
  User.findAll()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.json({
      info : "error",
      message: err.message
    });
  });
});


//create user
 //add User
 router.post('/register', function(req, res, next) {
   
   var hashpass = bcrypt.hashSync(req.body.password, 10)
   var users = {
     name: req.body.name,
     email: req.body.email,
     username: req.body.username,
     password: hashpass
 
   }
   User.create(users)
   .then(addUser => {
     res.send(addUser);
   })
   .catch(err => {
     res.json({
       info: "Error",
       message: err.message
     });
   }
   );
 });

 //get detail by id
router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  User.findByPk(id)
  .then(dataId => {
    if(dataId) {
      res.send(dataId);
    } else {
      // http 404 not found
      res.status(404).send({
        message: "tidak ada data id=" + id
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

  User.update(req.body, {
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
  const id = parseId(req.params.id);

  User.destroy({
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

 
 //login
 router.get('/login', function(req, res, next) {
   //res.render('loginForm', { title: 'Register' });
 });
 router.post('/login', function(req, res, next) {
	User.findOne({ where: { username: req.body.username } })
	.then(data => {
		console.log(loginValid);
		if(data) {
			var loginValid = bcrypt.compareSync(req.body.password, data.password);
			console.log(loginValid);
			if(loginValid) {
        res.send({message: "Anda sudah login"});
			}else{
				res.status()
			}
		}else {
			res.redirect('/login');
		}
	})
	.catch(err => {
	  	res.redirect('/login');
	});	
});  

router.get('/logout', function(req, res, next) {
	req.session.destroy();
	res.redirect('/login');
});  


module.exports = router;
