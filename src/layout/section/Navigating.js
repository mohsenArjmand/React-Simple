import React, { useContext } from 'react'
import Login from '../components/Login'
import { Route, Routes   } from 'react-router-dom'
import Home from '../section/Home'
import '../style/section.css'
import About from '../components/About'
import NoPage from '../components/NoPage'
import {  NavLink } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import TestContext from '../context/TestContext'
import Logoff from '../components/Logoff'
import DataForTable from '../components/DataForTable'

export default function Navigating() {
  const themesDark = useContext(ThemeContext)
  const themesRed = useContext(TestContext)
  let combinedTheme = { ...themesRed, ...themesDark }
  return (

    <section className='section' >

      <div className='sidebar box' style={combinedTheme}>
        <NavLink to='/' >Home</NavLink> <br></br>
        <NavLink to='/datafortable' >Table</NavLink><br></br>
        <NavLink to='/about' >About</NavLink> <br></br>
        <NavLink to='/login' >Login</NavLink><br></br>
        <NavLink to='/logoff' >Logoff</NavLink><br></br>
        <NavLink to='/nopage' >Error Page</NavLink><br></br>
      </div>
      <div className='home box' style={combinedTheme}>
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

  )
}
