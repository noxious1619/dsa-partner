import express from 'express';
import askGemini from '../controller/apiHandler.js';

const router = express.Router();

router.post('/ask', askGemini);

export default router;
