import React, { useState } from 'react'
import { Sparkles, SquarePen } from 'lucide-react'
import "../CSS_Folder/Article.css"
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'
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
  const[selectLength,setselectLength]=useState(content_length[0].length)
  console.log("select_length:",selectLength);
  const[loader,setloader]=useState(false)
  const[content,setcontent]=useState('')

axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL
console.log("backend_url",import.meta.env.VITE_BACKEND_URL)
  function changehandler(event){
    settopic((prev)=>({
     ...prev,
     [event.target.name]:event.target.value
    }) )
  }
 const {getToken}=useAuth()
 console.log("token",getToken())
  const article_submithandler=async(event)=>{
    event.preventDefault()
    try{
      setloader(true)
      const prompt=
     `Write a complete article about: "${topic.new_topic}".

Requirements:
- Write between ${selectLength} and ${selectLength + 200} words.
- Return only the finished article.
- Do not explain what the user requested.
- Do not include introductory phrases such as "It looks like you've asked me".
- Include a suitable title.
- Include an introduction, main content, and conclusion.
`;

      const {data}=await axios.post('/v1/ai/generate-article',{prompt,
        length:selectLength
      },
    {
      headers:{
        Authorization: `Bearer ${await getToken()}`
      }
    })
    if(data.success){
      setgenerate_article(data.content)
    }
    else{
      console.log(error.message)
      toast.error(error.message)
    }
    }catch(error){
      console.log(error.message)
      toast.error(error.message)
    }
    finally{
      setloader(false)
    }
      
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
          onClick={()=>setselectLength(item.length)} 
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
          {generate_article}
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
