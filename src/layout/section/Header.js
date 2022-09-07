import React, { useContext } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import AntTreeData from '../components/AntTreeData'
import DataForTable from '../components/DataForTable'
import Login from '../components/Login'
import Logoff from '../components/Logoff'
import NavLinkPersonal from '../components/NavLinkPersonal'
import NoPage from '../components/NoPage'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext' 
import Home from './Home'
import Navigating from './Navigating'
//import 


export default function Header() {
    const themeDark = useContext(ThemeContext)
    const themeBlue = useContext(TestContext)
  return (
    <div style={{...themeBlue,themeDark}}>
    <section className='section'>
      <div className='sidebar'>
    <AntTreeData/>
    </div>
    <div className='home'>
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
    </div>
    </section>
    
    </div>
  )
}
                                                        