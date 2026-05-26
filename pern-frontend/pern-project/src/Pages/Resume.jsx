import React, { useState } from 'react'
import { Sparkle, FileText } from 'lucide-react'
import "../CSS_Folder/Resume_review.css"
function Resume() {
  const [resumeReview,setresumeReview]=useState(null)
  const [resumeState, setresumeState]=useState('')
  const resume_submithandler=(event)=>{
    event.preventDefault()
  }
  return (
   <div className='review_resume_conatiner'>
     <div className='two_review_resume_containers'>
     <form className='first_resume_container' onSubmit={resume_submithandler}>
       <h2 className='first_resume_heading'><Sparkle size={20}/>Resume Review</h2>
       <span className='upload_image_subheading'>Upload Resume</span>
       <input
            type='file'
            accept='application/pdf'
            onChange={(event) => setresumeState(event.target.files[0])}
            className='resume_section'
            required
          />
          <p className='support_resume'>Support PDF,JPG and PNG Formats</p>
          <button className='review_resume_btn'><FileText size={20}/>Review resume</button>
     </form>
     <div className='second_object_removal_container'>
      <h2 className='second_object_removal_heading'><FileText size={20}/>Analysis Results</h2>
       {
        resumeReview ? (<div className='resume_review_content'>
         Resume_review
        </div>) :
        (<div className='no_resume_review_content'>
        <FileText size={20}/>
         <p className='no_resume_review'>Upload your resume and click on the 'Resume Review' to get started</p>
        </div>)
       }
      </div>
     </div>
    </div>
  )
}
export default Resume
