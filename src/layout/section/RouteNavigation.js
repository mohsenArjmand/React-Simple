import React from 'react'
import Login from '../components/Login'
import { Route, Routes   } from 'react-router-dom'
import '../style/section.css'
import Home from '../components/Home'
import About from '../components/About'
import NoPage from '../components/NoPage'  
import Logoff from '../components/Logoff'
import DataForTable from '../components/DataForTable'

export default function RouteNavigation() { 
  return (
      <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/datafortable' element={<DataForTable />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/logoff' element={<Logoff />} />
          <Route path='/about' element={<About />} />
          <Route path='/nopage' element={<NoPage />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
  )
}