
import express from "express";
import { Auth } from "../Middleware/Auth.js";
import { generateArticle } from "../Controller/Ai_controller.js";

const AI_Routes= express.Router();
AI_Routes.post('/generate-article',Auth,generateArticle)

export default AI_Routes;