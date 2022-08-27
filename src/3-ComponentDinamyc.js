import React from 'react'

 function ComponentDinamyc(props) {
  return (
    <div>
    <ComponentDinamyc {...props}>{props.children}</ComponentDinamyc>
   </div>
  )
}
export default ComponentDinamyc
