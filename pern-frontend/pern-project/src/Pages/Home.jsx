import React from 'react'
import Navbar from '../Components/Navbar'
import "../CSS_Folder/Home.css"
import Hero from '../Components/Hero'
function Home() {
  return (
    <div className='home_section'>
      <div className='home_content'>
        <Navbar/>
        <Hero/>
      </div>  
    </div>
  )
}

export default Home
