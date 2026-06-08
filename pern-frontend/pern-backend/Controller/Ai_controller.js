import { clerkClient } from "@clerk/express";
// import { OpenAI } from "openai/client.js";
import OpenAI from "openai";
import sql from "../Config/Db.js";
import axios from "axios"
import {v2 as Cloudinary} from "cloudinary"
import { ResourceScope } from "@google/genai";


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

export const generateBlog=async(req,res)=>{
  try{
    const {userId}=req.auth();
    const {prompt,category}=req.body;
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
    max_tokens:100,
});
console.log(response.choices[0].message)
const my_content=response.choices[0].message.content
 await sql
        `INSERT INTO SaaS(user_id,prompt,content,type)
         VALUES(${userId},${prompt},${my_content},'Blog')`

  if(plan !=='premium'){
    await clerkClient.users.updateUserMetadata(userId,{
     privateMetadata:{
        free_usage:free_usage+1
     }
    })
  }
  res.status(200).json({
    success:true,
    message:"generate_Blog function is perfectly_running",
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

export const generateImage=async(req,res)=>{
  try{
    const {userId}=req.auth();
    const {prompt,publish}=req.body;
    const plan =req.plan;
    // const free_usage=req.free_usage || 0;

    if(!userId){
        return res.status(402).json({
            success:false,
            message:"user is not authenticated"
        })
    }

    const formData = new FormData()
    formData.append('prompt', prompt)

    
   const response=await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{
        headers:{
            'x-api-key': process.env.IMAGE_API_KEY,
        },
        responseType:'arraybuffer'
   })  
   
   const base64image= `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
   const {secure_url}=await Cloudinary.uploader.upload(base64image)

    await sql
        `INSERT INTO SaaS(user_id,prompt,content,type,publish)
         VALUES(${userId},${prompt},${secure_url},'image', ${publish ?? false})`
  
  res.status(200).json({
    success:true,
    message:"generate_image function is perfectly_running",
    content:secure_url,
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
export const Remove_background=async(req,res)=>{
    try{
       const {userId}=req.auth()
    const plan=req.plan
    const {image}=req.file

    if(plan !== 'premium'){
      return res.status(401).json({
        success:false,
        message:"this is not the premium plan"
      })
    }

    const {secure_url}= await Cloudinary.uploader.upload(image.path,{
        transformation:[{
            effect:'background_removal',
            background_removal:'remove the background '
        }
        ]
    })
    await `INSERT INTO SaaS(user_id,prompt,content,type)
     VALUES(${userId},'remove background from the image',${secure_url},'image')` 

     res.status(200).json({
        success:true,
        message:'background_ image function is working fine',
        content:secure_url,
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
export const removeObejct_image=async(req,res)=>{
    try{
    const {userId}=req.auth()
    const image=req.file
    const plan= req.plan
    const {object}=req.body
    
    if(plan !== 'premium'){
      return res.status(401).json({
        success:false,
        message:"this is not the premium plan"
      })
    }

    const {public_id}=await Cloudinary.uploader.upload(image.path)

   const {image_url}= Cloudinary.url(public_id,{
    transformation:[{
        effect:`gen_remove:${object}`,
        resource_type:'image',
    }]
   
    })
    await `INSERT INTO SaaS(user_id,prompt,content,type)
     VALUES(${userId},${`remove ${object} from image`},${image_url},'image')` 
     
     res.status(200).json({
        success:true,
        message:'background object from image',
        content:image_url,
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