var express = require('express');
var router = express.Router();
const enrollmentController = require('../Controllers/EnrollmentController');




router.post('/create',enrollmentController.create);
router.get('/GetAll',enrollmentController.GetAll);
router.get('/GetbyId/:id',enrollmentController.GetbyId);
router.delete('/Delete/:id',enrollmentController.Delete);

module.exports = router;
