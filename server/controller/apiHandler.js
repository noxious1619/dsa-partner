import { main } from '../gemini.js';

const generatePrompt = (type, prompt) => {
  switch (type) {
    case 'explanation':
      return `Explain this DSA question in a beginner-friendly way:\n"${prompt}"`;
    case 'hint':
      return `Give a helpful hint to solve this DSA question:\n"${prompt}"`;
    case 'answer':
      return `Give a well-structured solution with code and explanation for this DSA question:\n"${prompt}"`; 
  }
};

const askGemini = async (req, res) => {
  const { prompt,type } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const finalPrompt = generatePrompt(type, prompt);

  try {
    const aiResponse = await main(finalPrompt);
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("Error from Gemini API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default askGemini;
