import React, { useContext } from 'react'
import About from '../components/About'
import AntTreeData from '../components/AntTreeData'
import NavLinkPersonal from '../components/NavLinkPersonal'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext' 
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
    <NavLinkPersonal />
    </div>
    </section>
    
    </div>
  )
}
                                                        