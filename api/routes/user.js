const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/', userController.listUsers);
router.get('/:user_id', userController.getUser);

router.post('/create', userController.create);

module.exports = router;