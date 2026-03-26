const express = require('express');
const {createNotice,getNotices,deleteNotice} = require('../controllers/notice.controller.js');
const router = express.Router();
const {protect} = require('../middleware/auth.middleware');
const {authorize} = require('../middleware/authorize.middleware');

router.get('/', getNotices);
router.post('/',  protect, authorize(['ADMIN', 'SUPER_ADMIN']), createNotice);
router.delete('/:id', protect, authorize(['ADMIN', 'SUPER_ADMIN']), deleteNotice);

module.exports = router;