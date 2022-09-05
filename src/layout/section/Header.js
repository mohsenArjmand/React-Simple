import React, { useContext } from 'react'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext'


export default function Header() {
    const themeDark = useContext(ThemeContext)
    const themeBlue = useContext(TestContext)
  return (
    <div style={{...themeDark,...themeBlue}}>Header</div>
  )
}
                                                        