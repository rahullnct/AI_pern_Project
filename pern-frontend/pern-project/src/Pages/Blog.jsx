import React from 'react'
import { useState } from 'react'
import { Sparkles, SquarePen,Hash } from 'lucide-react'
const Blog = () => {
  const[topic,settopic]=useState({
    new_topic:""
  })
  const All_Category=[
    {text:"general"},
    {text:"Technology"},
    {text:"Business"},
    {text:"Health"},
    {text:"Lifestyle"},
    {text:"Education"},
    {text:"Travel"},
    {text:"Food"},
  ]


  const[generate_article,setgenerate_article]=useState(null)
  const[blogCategory,setblogCategory]=useState(All_Category[0])
  // console.log(selectLength.length);


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
       <h2 className='first_article_heading'><Sparkles size={20}/> AI Title Generator</h2>
       <span className='article_topic_heading'>Keyword</span>
       <input 
       className='type_topic'
       placeholder='the future of Artificial intelligence'
       type='text'
       name='new_topic'
       value={topic.new_topic}
       onChange={changehandler}
       />
      <h4 className='full_article_length'>Article Length</h4>
      <div className='article_length'>
       {
        All_Category.map((item,index)=>(
          <p 
          onClick={()=>setblogCategory(item)} 
          key={index} className={item.length === blogCategory.length ? 'active_article_length' : ''}>
            {item.text}
            </p>
        ))
       }
      </div>
      <button className='generate_article_btn'> <SquarePen size={20}/> Generate Title</button>
      </div>
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
