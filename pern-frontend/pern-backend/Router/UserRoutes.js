import express from 'express'
import { Auth } from "../Middleware/Auth.js";
import { getUserData, getUserPublisher } from '../Controller/UserController.js';
const userRouter=express.Router();
userRouter.get('/user-detail',Auth,getUserData)
userRouter.get('/pubish-details',Auth,getUserPublisher)
export default userRouter;