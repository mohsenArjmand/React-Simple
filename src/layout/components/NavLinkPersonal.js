import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../section/Home'
import About from './About'
import DataForTable from './DataForTable'
import Login from './Login'
import Logoff from './Logoff'
import NoPage from './NoPage'

export default function NavLinkPersonal(tolink,title) {
  return (
    <div>NavLinkPersonal
<div> <NavLink to={tolink? '/':tolink} >{title? '/':title}</NavLink><br></br> </div>


<section className='section' >

<div className='sidebar box'  >
  <NavLink to={tolink} >{title}</NavLink> <br></br>
</div>
 <div className='home box' >
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/datafortable' element={<DataForTable />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/logoff' element={<Logoff />} />
    <Route path='/about' element={<About />} />
    <Route path='/nopage' element={<NoPage />} />
    <Route path='*' element={<NoPage />} />
  </Routes>
</div> 
</section>

    </div>

  )
}
