import { main } from '../gemini.js';

const askGemini = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const aiResponse = await main(prompt);
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("Error from Gemini API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default askGemini;
