import React from 'react'
import { useUser, useClerk } from '@clerk/clerk-react'
import { SquarePen, House, Hash , Image, Eraser, Scissors, FileSliders} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
function Sidebar({sidebar,setsidebar}) {
    const { user }=useUser();
    const { SignedOut, openUserProfile }=useClerk()
    const navigate=useNavigate()
    const navItems=[
        {to: '/dashboard', icon: House, content:'Dashboard' },
        {to: '/aricle', icon: SquarePen, content:'Write Article' },
        {to: '/blog', icon: Hash, content:'Blog Titles' },
        {to: '/images', icon: Image, content:'Generate Images' },
        {to: '/rebackground', icon: Eraser, content:'Remove Backgrounds'},
        {to: '/reobject', icon: Scissors, content:'Remove Object'},
        {to: '/reresume', icon: FileSliders, content:'Review Resume'},
    ]
    return (
    <div className='sidebar_container'>
    <img src={user.imageUrl} alt='sidebar_user_image' className='user_image'/>
    <h1 className='user_name'>{user.fullName}</h1>
    <div className='the_sidebar_contents'>
        {
            navItems.map((item)=> (
               <span onClick={()=> navigate(item.to)}> <item.icon size={20}/> {item.content}</span>
            ))
        }
    </div> 
    </div>
  )
}

export default Sidebar
