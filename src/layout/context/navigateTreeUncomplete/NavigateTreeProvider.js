import React, { useState } from 'react'
import NavigateTreeContext from './NavigateTreeContext'

export default function NavigateTreeProvider(toaddressprops,titleprops,{ children }) {
    const [toaddress , setToaddress] = useState(toaddressprops)
    const [title , setTitle] = useState(titleprops)
  return (
    <NavigateTreeContext.Provider>
        <div>NavigateTreeProvider
        { children }

        </div>
    </NavigateTreeContext.Provider>
    
  )
}
