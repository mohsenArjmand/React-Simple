import React from 'react'

export default function TodoList(props) {
    /*this.handleEventDel= ()=> {
console.log('deelte buttomn')
    }*/

    //console.log(props)
    return (
        <div >
            <hr></hr>
            <span key={'todo' + props.todoprops.id} >{props.todoprops.id} - {props.todoprops.task} </span>
            <input type="text" key={'text' + props.todoprops.id} value={props.newinput}            />
            <button onClick={props.propshandleEventAdd} key={'add' + props.todoprops.id}> + add </button>
            <button onClick={props.propshandleEventDel}> - del </button>
        </div>
    )
}
