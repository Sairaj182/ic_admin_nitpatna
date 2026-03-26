const express = require('express');
const {protect} = require('../middleware/auth.middleware');
const {authorize} = require('../middleware/authorize.middleware');
const {createIdeaMail,getIdeaMails} = require('../controllers/ideaMail.controller.js');
const {createIdeaMailSchema} = require('../validators/ideaMail.validator.js');
const {validate} = require('../middleware/validate.middleware');
const router = express.Router();

router.get('/', getIdeaMails);
router.post('/', validate(createIdeaMailSchema), createIdeaMail);

module.exports = router;
