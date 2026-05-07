import React from 'react'
import { useNavigate } from 'react-router-dom'
import {assets}from "../assets/assets"
import "../CSS_Folder/Hero.css"
const Hero = () => {
    const navigate=useNavigate();
  return (
        <div className='hero_container'>
           <h1 className='hero_heading'>Create Amazing Content with <span className='ai_tools'>AI Tools</span></h1>
            <p className='hero_subheading'>Transform your content creation with our suite of premium AI Tools, Write Articles, generate images, and enhance your workflow</p>
            <div className='hero_btns'>
                <button className='start_btn' onClick={()=>{navigate('/ai')}}>Start Creating Now</button>
                <button className='demo_btn'>Watch Demo</button>
            </div>
            <div className='trusted_persons'>
              <img src={assets.user_group} alt='hero_user_group_img'/>trusted by 10k+ People
            </div>
        </div>   
  )
}

export default Hero
