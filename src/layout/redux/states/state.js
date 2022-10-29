// import React from 'react'
// import { Provider as ReduxProvider } from 'react-redux'
// import { connect } from 'react-redux'
// import {createStore} from 'react-redux'
// export default function state() {
//     const store1 = createStore(reducer)
//     const {getState,dispatch,subscribe} = store1
//     const store = createStore (
//         reducer,
//         ()=>{},
//         ()=>{}
//     )

    
//     return (
//     <div>state
// <Provider store={store}>
 
// </Provider>

//     </div>
//   )
// }

 import React from 'react'
 import { createStore } from 'react-redux'
 import {reducer} from '../reducers/reducer'
 const store = createStore(reducer)
 export default store