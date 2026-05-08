import React, { useState } from 'react'
import {assets} from "../assets/assets"
import "../CSS_Folder/Footer.css"
const Footer = () => {
  const[formType,setformtype]=useState({
    email:""
  })
  function changehandler(event){
     setformtype((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
     }))
  }
  function submithandler(event){
    event.preventDefault()
    setformtype({
        email:""
    })
  }
    return (
    <div className='footer_section'>
     <div className='footer_left_section'>
        <img src={assets.logo} alt='footer_logo_image'/>
        <p>Experience the power of AI with QuickAi.Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
     </div>
     <div className='footer_right_section'>
      <div className='company_pages'>
      <h3 className='right_first_heading'>Company</h3>
      <span className='pages'>Home</span>
      <span className='pages'>About us</span>
      <span className='pages'>Contact us</span>
      <span className='pages'>Privacy policy</span>
      </div>
      <div className='company_address'>
       <p className='subscribe_heading'>Subscribe to our newsletter</p>
       <p className='subscribe_desc'>The latest news, articles, and resources, sent to your inbox weekly.</p>
       <div className='subscribe_section'>
        <input 
       className='user_email'
       type='text'
       placeholder='Enter your emial'
       value={formType.email}
       name='email'
       onChange={changehandler}
       />
       <button className='subscribe_btn' onClick={submithandler}>Subscribe</button>
      </div>
       </div>
       
     </div>
    </div>
  )
}

export default Footer
