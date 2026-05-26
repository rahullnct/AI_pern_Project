import express from "express";
import {clerkMiddleware} from '@clerk/express'
const app=express();
app.use(express.json());
app.use(clerkMiddleware())
const port=40000

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})

app.get("/",(req,res)=>{
    res.send(`<h1>homepage</h1>`)
})
