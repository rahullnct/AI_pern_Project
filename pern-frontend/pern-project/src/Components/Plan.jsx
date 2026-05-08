import React from 'react'
import { PricingTable } from '@clerk/clerk-react'
import "../CSS_Folder/Plan.css"
const Plan = () => {
  return (
    <div className='plan_container'>
    <h2 className='plan_heading'>Choose your Plan</h2>
    <p className='plan_subheading'>Start for free and scale up as you grow, Find the perfect plan for your content creation needs</p>
     <div className='price_section'>
      <PricingTable />   
     </div>
    </div>
  )
}

export default Plan
