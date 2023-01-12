import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import About from '../Header/About'


function Router() {
  return (
    
      <Routes>
      <Route path="/about" element={<About/>} >   </Route>
      <Route path='/' element={<App/>}></Route>
      </Routes>
    
  )
}

export default Router
