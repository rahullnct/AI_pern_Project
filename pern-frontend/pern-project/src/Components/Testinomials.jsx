import React from 'react'
import {dummyTestimonialData} from "../assets/assets"
import { Star } from 'lucide-react';
import "../CSS_Folder/Testinomial.css"
const Testinomials = () => {
  console.log(dummyTestimonialData);
  return (
    <div className='testinomials_container'>
      <h1 className='testinomial_heading'>Loved by Creators</h1>
      <p className='testinomial_suheading'>Don't just take our words for it, Here's what our user are saying</p>
      <div className='testinomial_cards'>
      {
        dummyTestimonialData.map((item,ind)=>(
          <div key={ind} className='personal_card'>
             {/* <span>{item.rating}</span> */}
             <div className='rating_stars'>

  {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        fill={i < item.rating ? "currentColor" : "none"}
        strokeWidth={2}
      />
  ))}
  </div>
             <p className='testi_desc'>{item.content}</p>
             <div className='testi_personal_data'>
              <img src={item.image} alt="testinomial_image" className='user_image'/>
              <div className='testi_data'> 
               <p className='user_name'>{item.name}</p>
               <span className='user_title'>{item.title}</span>
              </div>
              </div>
          </div>
        ))
      }  
      </div>
     
    </div>

  )
}

export default Testinomials
