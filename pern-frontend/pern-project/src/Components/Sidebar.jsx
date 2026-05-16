import React, { useState } from 'react'
import { useUser, useClerk } from '@clerk/clerk-react'
import { SquarePen, House, Hash , Image, Eraser, Scissors, FileSliders} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom';
import "../CSS_Folder/Sidebar.css"
function Sidebar({sidebar,setsidebar}) {
    const { user }=useUser();
    const { SignedOut, openUserProfile }=useClerk()
    const navigate=useNavigate()
    const[isactive,setisactive]=useState(false)
    const navItems=[
        {to: '/ai', icon: House, content:'Dashboard' },
        {to: '/ai/article', icon: SquarePen, content:'Write Article' },
        {to: '/ai/blog', icon: Hash, content:'Blog Titles' },
        {to: '/ai/generate-image', icon: Image, content:'Generate Images' },
        {to: '/ai/remove-background', icon: Eraser, content:'Remove Backgrounds'},
        {to: '/ai/remove-object', icon: Scissors, content:'Remove Object'},
        {to: '/ai/review-resume', icon: FileSliders, content:'Review Resume'},
    ]
    return (
    <div className='sidebar_container'>
    <img src={user.imageUrl} alt='sidebar_user_image' className='user_image'/>
    <h1 className='user_name'>{user.fullName}</h1>
    <div className='the_sidebar_contents'>
        {
            navItems.map((item)=> (
            <NavLink key={item.to} to={item.to} end={item.to === '/ai'} onClick={()=>setsidebar(false)} 
            className={({ isActive }) => isActive ? "active" : ""}>
                <item.icon size={20} className={`${isactive ? 'active_icon':''}`}/>
                <span className='sidebar_content_name'>{item.content}</span>
            </NavLink>
            ))
        }
    </div> 
    </div>
  )
}

export default Sidebar
