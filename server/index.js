import express from "express";
import dotenv from "dotenv";
import { main } from "./gemini.js";
import askRoute from "./routes/askRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Gemini test route
app.use('/api', askRoute);

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
