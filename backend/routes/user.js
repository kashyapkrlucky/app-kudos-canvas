const express = require('express');
const router = express.Router();

const controller = require('../controllers/user');
const { validate, validateUser } = require('../middlewares/auth');

router.post('/sign-in', controller.signIn);

router.post('/sign-up', controller.signUp);

router.get('/profile/:id', controller.profile);

router.get('/list', controller.list);

router.put('/update', controller.update);

router.put('/change-password/:id', validateUser, controller.changePassword);

router.get('/search/:str', controller.search);

module.exports = router;
