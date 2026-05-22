import React from 'react'
import { useState } from 'react'
import { Sparkles, SquarePen,Hash } from 'lucide-react'
const Blog = () => {
  const[topic,settopic]=useState({
    new_blog:""
  })
  const All_Category=[
    {text:"General"},
    {text:"Technology"},
    {text:"Business"},
    {text:"Health"},
    {text:"Lifestyle"},
    {text:"Education"},
    {text:"Travel"},
    {text:"Food"},
  ]

  // console.log("all_category:",All_Category[0].text)

  const[generate_article,setgenerate_article]=useState(null)
  const[blogCategory,setblogCategory]=useState(All_Category[0].text)
  console.log("blogCategory:",blogCategory);


  function changehandler(event){
    settopic((prev)=>({
     ...prev,
     [event.target.name]:event.target.value
    }) )
  }

function blog_submithandler(event){
  event.preventDefault()
  settopic({
    new_blog:""
  })
  setblogCategory(All_Category[0].text)
}
  return (
    <div className='article_containers'>
     <div className='two_article_containers'>
      <form className='first_article_container' onSubmit={blog_submithandler}>
       <h2 className='first_article_heading'><Sparkles size={20}/> AI Title Generator</h2>
       <span className='article_topic_heading'>Keyword</span>
       <input 
       className='type_topic'
       placeholder='the future of Artificial intelligence'
       type='text'
       name='new_blog'
       value={topic.new_blog}
       onChange={changehandler}
       />
      <h4 className='full_article_length'>Category</h4>
      <div className='all_Categories'>
       {
        All_Category.map((item,index)=>(
          <p 
           key={index} 
          onClick={()=>setblogCategory(item.text)} 
          className={`all_categories_content ${blogCategory === item.text ? 'active':''}`}
          >
            {item.text}
            </p>
        ))
       }
      </div>
      <button className='generate_article_btn'> <SquarePen size={20}/> Generate Title</button> 
      </form>
      
      <div className='second_article_container'>
      <h2 className='second_article_heading'><SquarePen size={20}/>Generate Article</h2>
       {
        generate_article ? (<div className='article_content'>
          generate_Article
        </div>) :
        (<div className='no_article_content'>
        <Hash size={20}/>
         <p className='no_article'>Enter a topic and click on the 'generate Aricle' to get started</p>
        </div>)
       }
      </div>
     </div>
    </div>
  )
}
export default Blog
