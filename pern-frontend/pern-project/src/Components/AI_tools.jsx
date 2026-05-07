import React, { useState } from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import "../CSS_Folder/AI_tool.css"
import { useUser } from '@clerk/clerk-react'

const AI_tools = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div className='ai_tools_container'>
            <h2 className='ai_tool_heading'>Powerfull AI Tools</h2>
            <p className='ai_tool_sub_heading'>Everything you need to create,enhance, and optimize your content with cutting edge AI Tools</p>
            <div className='ai_tool_cards'>
                {
                    AiToolsData.map((item, index) => (
                        <div className='ai_cards' onClick={() => user && navigate(item.path)} key={index}>
                            <span className='ai_tool_icon'
                                style={{
                                    background: `linear-gradient(135deg, ${item.bg.from}, ${item.bg.to})`
                                }}
                            ><item.Icon size={20} /></span>
                            <h2 className='ai_title'>{item.title}</h2>
                            <p className='ai_desc'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AI_tools;
