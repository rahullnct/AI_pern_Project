
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { X, Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { useUser, SignIn } from '@clerk/clerk-react'
import "../CSS_Folder/Layout.css"
function Layout() {
  const[sidebar,setsidebar]=useState(false)
  const navigate=useNavigate();
  const {user}=useUser()
  return user ? (
    <div className='layout_container'>
      <nav className='layout_navbar'>
        <img src={assets.logo} onClick={()=>navigate('/')} className='logo' alt='navbar_logo' />
      {
          sidebar ? <X size={20} onClick={()=> setsidebar(false)}/> : <Menu size={20} onClick={()=>setsidebar(true)}/>
      }
 </nav>
 <div className='sidebar_main'>
    <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
    <div className='sidebar_contents'>
      <Outlet/>
    </div> 
 </div>
    </div>
  ): 
 (<div className='signin_clerk'>
 <SignIn />
 </div>)
}

export default Layout
