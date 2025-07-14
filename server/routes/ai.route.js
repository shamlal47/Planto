import { Router } from "express";
import { chatWithAI } from "../controllers/ai.controller.js";

const AiRouter = Router();

AiRouter.post('/prompt', chatWithAI);

export default AiRouter;