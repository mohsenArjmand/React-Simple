import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

//   function NavigateToLink() {
//     goToTheAddress = (tolink,title) => {
//     const nav = useNavigate() 
//   console.log(tolink+title)
//       nav(tolink)
//     }
// }
// export default NavigateToLink


const NavigateToLink = (function () {
  function goToTheAddress (tolink,title) {
    const nav = useNavigate() 
  console.log(tolink+title)
      nav(tolink)
    }
  

});

export default NavigateToLink

      

    