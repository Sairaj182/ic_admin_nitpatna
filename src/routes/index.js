const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/notice', require('./notice.routes'));
router.use('/event', require('./event.routes'));
router.use('/ideaMail', require('./ideaMail.routes'));

module.exports = router;
