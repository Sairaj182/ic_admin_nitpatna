const express = require('express');
const { login, register, listUsers, refreshToken } = require('../controllers/auth.controller.js');
const { protect } = require('../middleware/auth.middleware.js');
const { authorize } = require('../middleware/authorize.middleware.js');
const { loginRateLimiter } = require('../middleware/rateLimit.middleware.js');
const router = express.Router();

router.post('/login', loginRateLimiter, login);
router.post('/register', loginRateLimiter, protect, authorize(['SUPER_ADMIN']), register);
router.get('/listUsers', protect, authorize(['ADMIN','SUPER_ADMIN']), listUsers);
router.post('/refreshToken', refreshToken);

module.exports = router;