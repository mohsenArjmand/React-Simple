import React, { useContext } from 'react'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext'
//import {  Link } from 'react-router-dom'

export default function SideBar() {
    const themeDark=useContext(ThemeContext)
    const themeBlue = useContext(TestContext)
    return (
        <div style={{...themeBlue,...themeDark}}>SideBar
                <ul>
                    <li>
                   99
                    </li>
                    {/* <li>
                       2
                        <Link to='login'>Login</Link>
                    </li>
                    <li>
                       3 <Link to='chart'>Chart</Link>
                    </li>
                    <li>
                       4 <Link to='contactus'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>About
                    </li> */}
                </ul>
        </div>
    )
}
