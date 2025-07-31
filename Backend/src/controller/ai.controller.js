const generateContent = require("../services/ai.services");

exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: "Code is required" });

    const response = await generateContent(code);
    res.json({ result: response });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "Failed to generate review" });
  }
};
