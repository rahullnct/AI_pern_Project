import React from 'react'
import Navbar from '../Components/Navbar'
import "../CSS_Folder/Home.css"
import Hero from '../Components/Hero'
import AI_tools from '../Components/AI_tools'
function Home() {
  return (
    <div className='home_section'>
      <div className='home_content'>
        <Navbar/>
        <Hero/>
        <AI_tools />
      </div>  
    </div>
  )
}

export default Home
