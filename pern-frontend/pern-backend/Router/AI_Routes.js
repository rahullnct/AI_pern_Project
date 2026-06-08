
import express from "express";
import { Auth } from "../Middleware/Auth.js";
import { generateArticle, generateBlog, generateImage, Remove_background, removeObejct_image } from "../Controller/Ai_controller.js";
import { upload } from "../Config/Multer.js";

const AI_Routes= express.Router();
AI_Routes.post('/generate-article',Auth,generateArticle)
AI_Routes.post('/generate-blog',Auth,generateBlog)
AI_Routes.post('/generate-image',Auth,generateImage)
AI_Routes.post('/remove-background',upload.single('image'),Auth,Remove_background)
AI_Routes.post('/removeObject-image',upload.single('image'),Auth,removeObejct_image)
export default AI_Routes;