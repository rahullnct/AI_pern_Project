import React from 'react'
import { assets } from '../assets/assets'
import {MoveRight} from "lucide-react"
import { useNavigate } from 'react-router-dom'
import "../CSS_Folder/Navbar.css"
import { useUser, useClerk, UserButton } from '@clerk/clerk-react'
const Navbar = () => {
    const navigate=useNavigate();
    const {user}=useUser()
    const { openSignIn }=useClerk();
  return (
    <div className='navbar_wrapper'>
     <div className='navbar_container'>
       <img src={assets.logo} alt='logo_image' onClick={()=>navigate('/')}/>
       {
        user ? <UserButton /> : <button className='get_started_btn' onClick={()=> openSignIn()}>Get Started<MoveRight/></button>
       }  
     </div>
    </div>
  )
}
export default Navbar
