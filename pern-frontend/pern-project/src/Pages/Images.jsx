import React, { useState } from 'react'
import { Sparkles, SquarePen,Hash,Image } from 'lucide-react'
function Images() {
  const[image_content,setImageContent]=useState({
    image_type:""
  })
  const[generate_image,setgenerateImage]=useState(null)
  const[activeImageType,setactiveImageType]=useState('Realistic')
  function changehandler(event){
    setImageContent((prev)=> ({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
  
  function submit_imagehandler(event){
    event.preventDefault()
    
  }
  return (
    <div className='article_containers'>
     <div className='two_article_containers'>
      <form className='first_article_container'
      onSubmit={submit_imagehandler}
      >
       <h2 className='first_article_heading'><Sparkles size={20}/> AI Image Generator</h2>
       <span className='article_topic_heading'>Descibe Your Image</span>
      <textarea 
      className='image_content_area'
      placeholder='Descibe what you want to see in the image'
      name='image_type'
      value={image_content.image_type}
      onChange={changehandler}
      required
      />
      <h4 className='full_article_length'>Style</h4>
      <div className='article_length'>
       <div 
       onClick={()=>setactiveImageType('Realistic')}
       className={`image_type_container ${activeImageType === 'Realistic' ? 'active':''}`}
       >
        <span className='image_type'>Realistic</span>
       </div>
      
       <div 
       onClick={()=>setactiveImageType('Ghibhli_style')}
       className={`image_type_container ${activeImageType === 'Ghibhli_style' ? 'active':''}`}
       >
        <span className='image_type'>Ghibhli style</span>
       </div>
      </div>
      <button className='generate_article_btn'> <Image size={20}/> Generate Title</button>
      </form>
      <div className='second_article_container'>
      <h2 className='second_article_heading'><Image size={25}/>Generate Article</h2>
       {
        generate_image ? (<div className='article_content'>
          generate Image
        </div>) :
        (<div className='no_article_content'>
        <Image size={20}/>
         <p className='no_article'>Describe an image and click on 'Generate Image' to get started</p>
        </div>)
       }
      </div>
     </div>
    </div>
  )
}
export default Images
