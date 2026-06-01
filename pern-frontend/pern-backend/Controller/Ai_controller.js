import { clerkClient } from "@clerk/express";
// import { OpenAI } from "openai/client.js";
import OpenAI from "openai";
import sql from "../Config/Db.js";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const generateArticle=async(req,res)=>{
  try{
    const {userId}=req.auth();
    const {prompt,length}=req.body;
    const plan =req.plan;
    const free_usage=req.free_usage || 0;

    if(!userId){
        return res.status(402).json({
            success:false,
            message:"user is not authenticated"
        })
    }
   
    if(plan!=='premium' && free_usage >= 10){
        return res.status(401).json({
            success:false,
            message:"limit is reached, upgrade the plan"
        })
    }

    const response = await AI.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
    temperature:0.7,
    max_tokens:Number(length) || 2000,
});
console.log(response.choices[0].message)
const my_content=response.choices[0].message.content
 await sql
        `INSERT INTO SaaS(user_id,prompt,content,type)
         VALUES(${userId},${prompt},${my_content},'article')`

  if(plan !=='premium'){
    await clerkClient.users.updateUserMetadata(userId,{
     privateMetadata:{
        free_usage:free_usage+1
     }
    })
  }
  res.status(200).json({
    success:true,
    message:"generate_article function is perfectly_running",
    content:my_content,
  })

  }
  catch(error){
    console.log("error",error)
    res.status(400).json({
        success:false,
        message:error.message

    })
  }

}
