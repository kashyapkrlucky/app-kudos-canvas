const express = require('express');
const router = express.Router();

const controller = require('../controllers/article');

router.get('/', controller.getAll);

router.get('/person/:id', controller.getByPerson);

router.get('/author/:id', controller.getByAuthor);

router.post('/create', controller.create);

router.put('/update', controller.update);

router.delete('/delete/:id', controller.delete);

module.exports = router;