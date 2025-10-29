const express = require('express');
const {createIdeaMail,getIdeaMails} = require('../controllers/ideaMail.controller.js');
const router = express.Router();

router.post('/', createIdeaMail);
router.get('/', getIdeaMails);

module.exports = router;
