const express = require('express');
const {protect} = require('../middleware/auth.middleware');
const {authorize} = require('../middleware/authorize.middleware');
const {validate} = require('../middleware/validate.middleware');
const {getAllEvents,createEvent,deleteEvent } = require('../controllers/event.controller');
const { createEventSchema } = require('../validators/event.validator');
const router = express.Router();

router.get('/', getAllEvents);
router.post('/createEvent', protect, authorize(['ADMIN', 'SUPER_ADMIN']), validate(createEventSchema), createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;