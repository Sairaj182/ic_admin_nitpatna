const express = require("express");
const router = express.Router();
const { createNotice, getNotices, deleteNotices } = require("./noticeController");
const { protect } = require("../authMiddleware");

// public route
router.get("/get", getNotices);

// only for admin routes
router.post("/create", protect, createNotice);
router.post("/delete", protect, deleteNotices);

module.exports = router;
