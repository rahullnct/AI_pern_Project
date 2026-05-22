import React, { useState } from 'react'
import { Sparkles, SquarePen } from 'lucide-react'
import "../CSS_Folder/Article.css"
const Article = () => {
  const[topic,settopic]=useState({
    new_topic:""
  })
  const content_length=[
    {length:200, content:'Short (200-400) words'},
    {length:400, content:'Long (400-800) words'},
    {length:800, content:'Long (800-1200) words'},
  ]
  // console.log("article_content_length",content_length[0]?.content)


  const[generate_article,setgenerate_article]=useState(null)
  const[selectLength,setselectLength]=useState(content_length[0].content)
  console.log("select_length:",selectLength);


  function changehandler(event){
    settopic((prev)=>({
     ...prev,
     [event.target.name]:event.target.value
    }) )
  }

  function article_submithandler(event){
    event.preventDefault()
    settopic({
     new_topic:""
    })
    setselectLength(content_length[0].content)
    
  }
  return (
    <div className='article_containers'>
     <div className='two_article_containers'>
      <form className='first_article_container' 
      onSubmit={article_submithandler}>
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
      <div className='article_length_container'>
       {
        content_length.map((item,index)=>(
          <p 
          key={index} 
          onClick={()=>setselectLength(item.content)} 
          className={`article_length ${selectLength === item.content ? 'active_article_length':''}`}>
            {item.content}
            </p>
        ))
       }
      </div>
      <button className='generate_article_btn'> <SquarePen size={20}/> Generate Aricle</button>
      </form>
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
