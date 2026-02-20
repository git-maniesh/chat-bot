require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const geminiRoutes = require("./routes/geminiRoutes");

const app = express();

// Security Headers
app.use(helmet());

// Body parser
app.use(express.json());

// CORS Protection
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "x-client-secret"]
}));

// Routes
app.use("/api/gemini", geminiRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("Secure Gemini Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});