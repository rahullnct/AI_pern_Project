import express from "express";
import "dotenv/config";
import {clerkMiddleware} from '@clerk/express'

const app=express();
app.use(express.json());

const port=40000
app.use(clerkMiddleware())
app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})

app.get("/",(req,res)=>{
    res.send(`<h1>homepage</h1>`)
})
