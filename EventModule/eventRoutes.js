const express = require("express");
const router = express.Router();
const { getEvents, createEvent, deleteEvents } = require("./eventController");
const { protect } = require("../authMiddleware");

// public route
router.get("/events/get", getEvents);

// only for admin routes
router.post("/events/create", protect,createEvent);
router.post("/events/delete", protect,deleteEvents);

module.exports = router;
