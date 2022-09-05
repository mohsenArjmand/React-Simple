import React, { useContext } from 'react'
import TestContext from '../context/TestContext'
import ThemeContext from '../context/ThemeContext'

export default function Footer() {
    const theme = useContext(ThemeContext)
    const testtheme=useContext(TestContext)
  return (
    <div style= {{...theme,...testtheme}}>Footer</div>
  )
}
