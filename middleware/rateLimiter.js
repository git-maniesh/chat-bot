const rateLimit = require("express-rate-limit");

const geminiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

module.exports = geminiLimiter;