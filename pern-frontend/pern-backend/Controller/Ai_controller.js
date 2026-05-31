import { OpenAI } from "openai/client.js";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const generateArticle=async(req,res)=>{
  try{
    const {userId}=req.auth();
    const {prompt,length}=req.body;
    const {plan}=req.plan;
    const free_usage=req.free_usage;
   
    if(plan!=='premium' && free_usage >= 10){
        res.status(401).json({
            success:false,
            message:"limit is reached, upgrade the plan"
        })
    }

    const response = await AI.chat.completions.create({
    model: "gemini-3.5-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
    temperature:0.7,
    max_token:length,
});
console.log(response.choices[0].message)



  }
  catch(error){
    res.status(400).json({
        success:false,
        message:error.message
    })
  }

}