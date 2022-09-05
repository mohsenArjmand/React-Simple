import React from 'react'

export const themes = {
    dark: {
        color: 'white'//,
        //backgroundColor: 'Gray'
    },
    light: {
        color: 'black'//,
        //backgroundColor: 'white'
    }
}

const ThemeContext = React.createContext()

export default ThemeContext 
