import { Sparkle, Scissors} from 'lucide-react'
import React, { useState } from 'react'
import "../CSS_Folder/Object_removal.css"
function Object() {
  const[ObjectState,setObjectState]=useState('')
  const[remove_Detail,setremove_Detail]=useState({
    remove_object:""
  })
  const[objectRemoveImage,setobjectRemoveImage]=useState(null)
  const changehandler =(event)=>{
    setremove_Detail((prev)=> ({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
  function submithandler(event){
    event.preventDefault()
  }
  return (
    <div className='remove_Object_conatiner'>
     <div className='two_object_containers'>
     <form className='first_object_container' onSubmit={submithandler}>
       <h2 className='first_object_heading'><Sparkle size={20}/>Object Removal</h2>
       <span className='upload_image_subheading'>Upload Image</span>
       <input
            type='file'
            accept='image/*'
            onChange={(event) => setObjectState(event.target.files[0])}
            className='image_section'
            required
          />
          <div className='describe_object_removal'>
            <h4 className='object_removol_detail'>Describe Object to remove</h4>
            <textarea 
            type='text'
            placeholder='e.g. car in background, tree from the image'
            name='remove_object'
            value={remove_Detail.remove_object}
            onChange={changehandler}
            />
            <p>Be Specific about what you want to remove</p>
          </div>
          <button className='remove_object_btn'><Scissors size={20}/>Remove Obejct</button>
     </form>
     <div className='second_object_removal_container'>
      <h2 className='second_object_removal_heading'><Scissors size={25}/>Remove Objct</h2>
       {
        objectRemoveImage ? (<div className='object_removal_content'>
          Object removal
        </div>) :
        (<div className='no_object_removal_content'>
        <Scissors size={20}/>
         <p className='no_object_removal'>Describe which object you want to remove and click on 'Remove Object' to get started</p>
        </div>)
       }
      </div>
     </div>
    </div>
  )
}

export default Object
