import React, { useContext } from 'react'
import '../style/section.css'
import {  NavLink } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import TestContext from '../context/TestContext'
import RouteNavigation from './RouteNavigation'

export default function Navigating() {
  const themesDark = useContext(ThemeContext)
  const themesRed = useContext(TestContext)
  let combinedTheme = { ...themesRed, ...themesDark }
  return (

    <section className='section' >
      <div className='sidebar box' style={combinedTheme}>
        <NavLink to='/home' >Home</NavLink> <br></br>
        <NavLink to='/datafortable' >Table</NavLink><br></br>
        <NavLink to='/about' >About</NavLink> <br></br>
        <NavLink to='/login' >Login</NavLink><br></br>
        <NavLink to='/logoff' >Logoff</NavLink><br></br>
        <NavLink to='/nopage' >Error Page</NavLink><br></br>
      </div>
      <div className='home box' style={combinedTheme}>
             <RouteNavigation></RouteNavigation>
      </div>
    </section>

  )
}
