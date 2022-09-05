import React ,{useState} from 'react'
import TestContext, { testtheme } from './TestContext'
 

export default function TestContextProvider({ children }) {
    const [currtheme, setCurrtheme] = useState(testtheme.bluetheme)
    return (
            <TestContext.Provider value={currtheme}>
                {   (currtheme === testtheme.bluetheme) ?
                    (<button onClick={()=>setCurrtheme(testtheme.redtheme)}>Red (Background)</button>) :
                    ((<button onClick={()=>setCurrtheme(testtheme.bluetheme)}>Blue (Background)</button>))}
                <br></br>
                TestContextProvider
                {children}
            </TestContext.Provider>
        
    )
}
