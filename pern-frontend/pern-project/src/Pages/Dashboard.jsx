import React, { useEffect, useState } from 'react'
import {dummyCreationData} from "../assets/assets"
import { Sparkles, MousePointerClick } from 'lucide-react'
import {Protect} from '@clerk/clerk-react'
import "../CSS_Folder/Dashboard.css"
const Dashboard = () => {
  const[creations,setcreation]=useState([])
  // console.log("in dashboard:",creations)
const[expanded,setexpaned]=useState(null)
  const getdashboard_Data= async()=>{
     setcreation(dummyCreationData)
  }

  useEffect(()=>{
    getdashboard_Data()
  },[])
  return (
    <div className='dashboard_container'>
      <div className='card_wrapper'>
       <div className='first_Card_container'>
        <div className='total_Creation'>
           <p className='creation'>Total Creation</p>
           <h2 className='total_length'>{creations ? creations.length : 0}</h2>
        </div>
        <div className='dashboard_first_card_icons'> i
       <Sparkles size={20}/>
       </div>
       </div>
       <div className='second_Card_container'>
        <div className='plan_status_card'>
           <p className='plan_status'>Plan Status</p>
           <h2 className='check_plan'>
            <Protect plan='premium' fallback='Free'>Premium</Protect>
           </h2>
        </div>
        <div className='dashboard_second_card_icons'> 
          <MousePointerClick size={20}/>
        </div>
       
       </div>
      </div>
      <div className='recent_creation_wrapper'>
        <h3 className='recent_creation_heading'>Recent Creations</h3>
        <div className='recent_creation_contents'>
         {
          creations.map((item,ind)=>(
            <div  onClick={()=> setexpaned(!expanded)} key={ind} className='recent_creation_container' >
              <div className='dashboard_Details'>
              <p className='creation_title'>{item.prompt}</p>
              <p className='creation_type'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
              </div>
            <div className='prompt_type'>
            <span>{item.type}</span>
            </div>
            {
              expanded && (
                item.type === 'image' ? (
                  <div className='content_image_container'>
                    <img src={item.content} alt='prompt_image' className='content_image'/>
                  </div>
                ):(<div className='simple_content'>
                 <p className='content_without_image'>{item.content}</p>
                  </div>)
                   
              )
            
            }
            </div>
            
          ))
         }
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard
