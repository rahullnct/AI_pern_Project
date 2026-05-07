import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
function App() {
  return(
    <div>
       <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/ai' element={<Layout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='write-article' element={<Article/>}/>
                  <Route path='blog-titles' element={<Blog/>}/>
             </Route>
             
       </Routes>
    </div>
      
  
  )
}
export default App
