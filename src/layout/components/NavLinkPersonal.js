import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../section/Home'
import About from './About'
import DataForTable from './DataForTable'
import Login from './Login'
import Logoff from './Logoff'
import NoPage from './NoPage'

export default function NavLinkPersonal(tolink,title) {
  
    console.log(tolink+title)
    console.log(<NavLink to={tolink} >{title}</NavLink>)
    const nav = useNavigate()
    nav(tolink)

}
