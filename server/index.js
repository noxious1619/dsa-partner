import express from "express";
import dotenv from "dotenv";
import { main } from "./gemini.js";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Gemini test route
app.post("/api/ask", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const aiResponse = await main(prompt);
    res.status(200).json({ response: aiResponse });
  }catch (error) {
    console.error("Error from Gemini API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }

});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
