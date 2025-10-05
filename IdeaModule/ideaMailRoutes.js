const express = require("express");
const router = express.Router();
const { storeIdeaMail, getIdeaMails } = require("./ideaMailController");
const { protect } = require("../authMiddleware");

// Public route for form submission
router.post("/create", protect, storeIdeaMail);

// Admin route to view mails
router.get("/get", protect, getIdeaMails);

module.exports = router;
