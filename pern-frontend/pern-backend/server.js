import express from "express";
import "dotenv/config";
import {clerkMiddleware, requireAuth} from '@clerk/express'
import AI_Routes from "./Router/AI_Routes.js";

const app=express();
app.use(express.json());

const port=40000
app.use(clerkMiddleware())

app.get("/",(req,res)=>{
    res.send(`<h1>homepage</h1>`)
})
app.use(requireAuth())
app.use('/v1/ai',AI_Routes)
app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})


