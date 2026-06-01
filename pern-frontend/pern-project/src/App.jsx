import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
import Images from './Pages/Images';
import Background from './Pages/Background';
import Object from './Pages/Object';
import Resume from './Pages/Resume';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
function App() {
    const {getToken}= useAuth()
    useEffect(()=>{
      getToken().then((token)=> console.log("token",token))
    },[])


  return(
    <div>
       <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/ai' element={<Layout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='article' element={<Article/>}/>
                  <Route path='blog' element={<Blog/>}/>
                  <Route path='generate-image' element={<Images/>}/>
                  <Route path='remove-background' element={<Background/>}/>
                  <Route path='remove-object' element={<Object/>}/>
                  <Route path='review-resume' element={<Resume/>}/>
                  
             </Route>
             
       </Routes>
    </div>
      
  
  )
}
export default App
