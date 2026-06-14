import express from "express";
import "dotenv/config";
import {clerkMiddleware, requireAuth} from '@clerk/express'
import AI_Routes from "./Router/AI_Routes.js";
import ConnectCloudinary from "./Config/Cloudinary.js";
import userRouter from "./Router/UserRoutes.js";
import cors from 'cors'


const app=express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

const port=40000
app.use(clerkMiddleware())
await ConnectCloudinary()



app.get("/",(req,res)=>{
    res.send(`<h1>homepage</h1>`)
})
app.use(requireAuth())
app.use('/v1/ai',AI_Routes)
app.use('/user',userRouter)
app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})


