import React from 'react'
import {Sparkles, Eraser} from 'lucide-react'
import { useState } from 'react'
import "../CSS_Folder/Background.css"
function Background() {
  const[image_state,setImagestate]=useState(null)
  return (
    <div className='remove_background_container'>
      <div className='background_first_container'>
       <h2 className='first_container_heading'><Sparkles size={20}/>Backgorund Removal</h2>
       <span className='upload_image'>Upload Image</span>
        <input 
       type='file'
       accept='application/pdf'
       className='image_section'
       required
       />
       <p className='support'>Support JPG,PNG and other image format</p>  
       <button className='remove_background_btn'><Eraser size={20}/>Remove Background</button>
      </div>
      <div className='background_second_container'>
       <h2 className='second_container_heading'><Eraser size={20}/>Processed Image</h2>
       <div className='image_removed_by_ai'>
        {
          image_state ? (<div className='image_content_by_ai'>
            Image_section_by_ai
          </div>) :
          (<div className='no_removal_background_image'>
             <Eraser size={25} />
        <p className='No_image'>Upload an image and click 'Remove Background' to get started </p>
            </div>)
        }
       </div>
      </div>
     
    </div>
  )
}

export default Background
