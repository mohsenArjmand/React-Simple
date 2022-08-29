import React /*, { useEffect, useState }*/ from 'react'
import './todo.css'

export default function TodoList(props) {

 const onclickspan = (e) => {
        console.log(e.target, 'id')
        console.log(props.todoprops.complete, 'onclickspan')
        if (e !== -1) {
            props.todoprops.complete = !props.todoprops.complete;
            console.log(props.todoprops.complete[e.target.value])
            //this.setIsComplete({ todos: arrayTemp });
        }
    }
    return (
        <div >
            <hr></hr>
            {props.todoprops.complete ?
                <span key={'todo1' + props.todoprops.id}
                    onClick={onclickspan}
                >{props.todoprops.id} - {props.todoprops.task} </span> :
                <span key={'todo2' + props.todoprops.id} style={{
                   color:'red'
                }}
                    onClick={onclickspan }
                >{props.todoprops.id} - {props.todoprops.task} </span>
            }


            <button onClick={props.propshandleEventDel}> - del </button>
        </div>
    )
}
