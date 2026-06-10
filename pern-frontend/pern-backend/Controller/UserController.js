import sql from "../Config/Db"

export const getUserData=async(req,res)=>{
    try{
        const {userId}=req.auth()

        const creation= await sql
        `SELECT * FROM THE SaaS WHERE user_id=${userId} ORDER BY created_at DESC`

        res.json({
            success:true,
            content:creation,
            message:"yes the getUserData is prefectly running"
        })
    }catch(error){
        console.log("error",error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const getUserPublisher=async(req,res)=>{
    try{
       const {userId}=req.auth()
       const content=await sql
        `SELECT * FROM SaaS WHERE publish=TRUE 
        ORDER BY created_at DESC`

        res.json({
            success:true,
            content:content,
            message:"get the detailed of user publisher"
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
