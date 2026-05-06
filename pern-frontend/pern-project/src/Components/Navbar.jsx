import React from 'react'
import { assets } from '../assets/assets'
import {MoveRight} from "lucide-react"
import { useNavigate } from 'react-router-dom'
import "../CSS_Folder/Navbar.css"
import { useClerk, UserButton,useUser} from '@clerk/react'
const Navbar = () => {
    const navigate=useNavigate();
    const {useClerk}=useClerk;
    
  return (
    <div className='navbar_wrapper'>
     <div className='navbar_container'>
       <img src={assets.logo} alt='logo_image' onClick={()=>navigate('/')}/>
       <button className='get_started_btn'>Get Started <MoveRight/></button>
     </div>
    </div>
  )
}
export default Navbar
