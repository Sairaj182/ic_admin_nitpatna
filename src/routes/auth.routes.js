const express = require('express');
const { login, register } = require('../controllers/auth.controller.js');
const { loginRateLimiter } = require('../middleware/rateLimit.middleware.js');
const router = express.Router();

router.post('/', loginRateLimiter, login);
router.post('/register', loginRateLimiter, register);

module.exports = router;
