import React, { useState } from 'react'
import NavigateTreeContext from './NavigateTreeContext'

export default function NavigateTreeProvider({ children }) {
    const [toaddress , setToaddress] = useState()
    const [title , setTitle] = useState()
  return (
    <NavigateTreeContext.Provider>
        <div>NavigateTreeProvider
        { children }
        </div>
    </NavigateTreeContext.Provider>
    
  )
}
