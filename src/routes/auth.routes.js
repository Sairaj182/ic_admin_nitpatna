const express = require('express');
const { login, register, listUsers } = require('../controllers/auth.controller.js');
const { protect } = require('../middleware/auth.middleware.js');
const { authorize } = require('../middleware/authorize.middleware.js');
const { loginRateLimiter } = require('../middleware/rateLimit.middleware.js');
const router = express.Router();

router.post('/login', loginRateLimiter, login);
router.post('/register', loginRateLimiter, protect, authorize(['SUPER_ADMIN']), register);
router.get('/listUsers', protect, authorize(['ADMIN','SUPER_ADMIN']), listUsers);

module.exports = router;
