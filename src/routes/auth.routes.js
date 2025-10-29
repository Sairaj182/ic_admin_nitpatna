const express = require('express');
const { login, register } = require('../controllers/auth.controller.js');
const router = express.Router();

router.post('/', login);
router.post('/register', register);

module.exports = router;
