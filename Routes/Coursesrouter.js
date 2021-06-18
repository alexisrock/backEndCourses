var express = require('express');
var router = express.Router();
const CourContrller = require('../Controllers/CoursesController');


router.post('/create',CourContrller.create);
router.get('/GetAll',CourContrller.GetAll);
router.get('/GetbyId/:id',CourContrller.GetbyId);
router.delete('/Delete/:id',CourContrller.Delete);

module.exports = router;
