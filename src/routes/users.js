var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController.js');


router.get('/', usersController.getUsers);
router.post('/register', usersController.createUser);
router.put('/edit/:id', usersController.updateUser);


module.exports = router;