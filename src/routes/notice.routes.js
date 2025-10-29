const express = require('express');
const {createNotice,getNotices,deleteNotice} = require('../controllers/notice.controller.js');
const router = express.Router();

router.get('/', getNotices);
router.post('/', createNotice);
router.delete('/:id', deleteNotice);

module.exports = router;