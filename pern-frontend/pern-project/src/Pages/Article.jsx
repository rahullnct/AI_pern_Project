import React, { useState } from 'react'
import { Sparkles, SquarePen } from 'lucide-react'
import "../CSS_Folder/Article.css"
const Article = () => {
  const[topic,settopic]=useState({
    new_topic:""
  })
  const[generate_article,setgenerate_article]=useState(null)
  function changehandler(event){
    settopic((prev)=>({
     ...prev,
     [event.target.name]:event.target.value
    }) )
  }
  return (
    <div className='article_containers'>
     <div className='two_article_containers'>
      <div className='first_article_container'>
       <h2 className='first_article_heading'><Sparkles size={20}/> AI Article Writer</h2>
       <span className='article_topic_heading'>Article Topic</span>
       <input 
       className='type_topic'
       placeholder='the future of partials intelligence'
       type='text'
       name='new_topic'
       value={topic.new_topic}
       onChange={changehandler}
       />
      <h4 className='full_article_length'>Article Length</h4>
      <div className='article_length'>
       <div className='short_article'>
        <p className='short_article_length'>Short(200-400)words</p>
       </div>
       <div className='long_article'>
        <p className='long_article_length'>Long(400-800)words</p>
       </div>
      </div>
      <button className='generate_article_btn'> <SquarePen size={20}/> Generate Aricle</button>
      </div>
      <div className='second_article_container'>
      <h2 className='second_article_heading'><SquarePen size={20}/>Generate Article</h2>
       {
        generate_article ? (<div className='article_content'>
          generate_Article
        </div>) :
        (<div className='no_article_content'>
         <SquarePen size={30}/>
         <p className='no_article'>Enter a topic and click on the 'generate Aricle' to get started</p>
        </div>)
       }
      </div>
     </div>
    </div>
  )
}

export default Article
