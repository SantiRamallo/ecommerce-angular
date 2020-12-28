var express = require('express');
var router = express.Router();

const rolesController = require('../controllers/rolesController.js');

/* GET home page. */
router.get('/', rolesController.getRoles);