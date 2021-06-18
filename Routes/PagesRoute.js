var express = require('express');
var router = express.Router();

const pagesController = require('../Controllers/PagesController');


router.post('/create',pagesController.create);
router.get('/GetAll',pagesController.GetAll);
router.get('/GetbyId/:id',pagesController.GetbyId);
router.delete('/Delete/:id',pagesController.Delete);

module.exports = router;