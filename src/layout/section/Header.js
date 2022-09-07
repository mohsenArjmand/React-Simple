import React, { useContext } from 'react'
import AntTreeData from '../components/AntTreeData'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext'
import RouteNavigation from './RouteNavigation'

export default function Header() {
  const themeDark = useContext(ThemeContext)
  const themeBlue = useContext(TestContext)
  return (
    <div style={{ ...themeBlue, themeDark }}>
      <section className='section'>
        <div className='sidebar'>
          <AntTreeData />
        </div>
        <div className='home'>
          <div className='home box' >
            <RouteNavigation></RouteNavigation>
          </div>
        </div>
      </section>
    </div>
  )
}
