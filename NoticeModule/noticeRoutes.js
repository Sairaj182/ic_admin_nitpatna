const express = require("express");
const router = express.Router();
const { createNotice, getNotices, deleteNotices } = require("./noticeController");
const { protect } = require("../authMiddleware");

// public route
router.get("/notices/get", getNotices);

// only for admin routes
router.post("/notices/create", protect, createNotice);
router.post("/notices/delete", protect, deleteNotices);

module.exports = router;
