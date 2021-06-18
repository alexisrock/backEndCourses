var express = require('express');
var router = express.Router();
const UserController = require('../Controllers/UsersController');

router.post('/create',UserController.create);
router.get('/GetAll',UserController.GetAll);
router.get('/GetbyId/:id',UserController.GetbyId);
router.delete('/Delete/:id',UserController.Delete);





module.exports = router;
