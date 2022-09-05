import React, { useContext } from 'react'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext'
import AntTree from './AntTree'
//import 


export default function Header() {
    const themeDark = useContext(ThemeContext)
    const themeBlue = useContext(TestContext)
  return (
    <div >Header
    <AntTree/>
    
    </div>
  )
}
                                                        