const express = require("express");
const router = express.Router();

const { generateContent } = require("../controllers/geminiController");
const rateLimiter = require("../middleware/rateLimiter");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, rateLimiter, generateContent);

module.exports = router;