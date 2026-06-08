import {v2 as Cloudinary} from "cloudinary" 

const ConnectCloudinary=async()=>{
    Cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY,
    })
}
export default ConnectCloudinary