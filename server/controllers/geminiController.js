const axios = require("axios");

const generateContent = async (req, res) => {
  try {

    const userPrompt = req.body?.prompt;

    if (!userPrompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              { text: userPrompt }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" },
        params: {
          key: process.env.GEMINI_API_KEY,
        },
      }
    );

    res.json(response.data);

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data || "Gemini request failed"
    });
  }
};

module.exports = { generateContent };