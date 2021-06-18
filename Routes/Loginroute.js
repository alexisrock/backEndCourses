var express = require('express');
var router = express.Router();
const loginController = require('../Controllers/LoginController');

router.post('/authenticate',loginController.autenticate );
router.post('/create',loginController.create);

module.exports = router;