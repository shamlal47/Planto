import { Router } from "express";
import { chatWithAI } from "../controllers/ai.controller.js";

const aiResponse = Router();

aiResponse.post('/chat', chatWithAI);
