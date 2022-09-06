import React from 'react'
import ContextProvider from './context/ContextProvider'
import TestContextProvider from './context/TestContextProvider'
//import ThemeContext from './context/ThemeContext'
import Footer from './section/Footer'
import Header from './section/Header'
import './style/section.css'
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
                        <div className='header tree'>
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
