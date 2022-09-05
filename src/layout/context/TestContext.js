import React from 'react'

export const testtheme = {
    bluetheme: {
        //color: 'blue',
        backgroundColor: 'skyblue',
        border: '2px dashed darkblue'
        ,alignText:'center'
        ,fontSize:'large'
    },
    redtheme: {
        //color: 'darkred',
        backgroundColor: 'pink',
        border: '2px dotted brown'
        ,align:'center'
        ,fontSize:'large'
    }

}

const TestContext = React.createContext()
export default TestContext

