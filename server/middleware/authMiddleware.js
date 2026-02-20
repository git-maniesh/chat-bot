const authMiddleware = (req, res, next) => {
  const clientSecret = req.headers["x-client-secret"];

  if (!clientSecret || clientSecret !== process.env.INTERNAL_API_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  next();
};

module.exports = authMiddleware;
