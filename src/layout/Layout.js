import React, { useState } from 'react'
import Login from './components/Login'
import ContextProvider from './context/ContextProvider'
import TestContextProvider from './context/TestContextProvider'
//import ThemeContext from './context/ThemeContext'
import { Route, Routes, BrowserRouter,Router } from 'react-router-dom'
import Footer from './section/Footer'
import Header from './section/Header'
import Home from './section/Home'
import SideBar from './section/SideBar'
import './style/section.css'
import About from './components/About'
import NoPage from './components/NoPage'
import {  Link } from 'react-router-dom'
import Navigating from './section/Navigating'

export default function Layout() {
    //const [theme, setTheme] = useState('light')
    /*
      <ContextProvider>
      </ContextProvider>
    */
    return (
        <div>
            <ContextProvider>
                <TestContextProvider>
                    <h2> Layout </h2>
                    <hr></hr>

                    <div className='box section'>
                        <div className='header'>
                            <Header></Header>
                        </div>
                    </div>
                    <Navigating/>

                    <div className='box'>
                        <Footer ></Footer>
                    </div>
                </TestContextProvider>
            </ContextProvider>
        </div>
    )
}
