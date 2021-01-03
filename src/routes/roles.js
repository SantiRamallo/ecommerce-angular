var express = require('express');
var router = express.Router();

const rolesController = require('../controllers/rolesController.js');


router.get('/', rolesController.getRoles);


module.exports = router;