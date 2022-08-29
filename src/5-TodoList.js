import React from 'react'
import './todo.css'

export default function TodoList(props) {
    //const [toDoList, setToDoList] = useState([...props.todoprops]);
    
    const onclickspan = (e) => {
        console.log(e.target, 'id')
        console.log(props.todoprops.complete, 'onclickspan')
        if (e !== -1) {
            props.todoprops.complete = !props.todoprops.complete;
            console.log(props.todoprops.complete[e.target.value])
            //this.setIsComplete({ todos: arrayTemp });
        }
    }
    
    /*const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    }*/
    return (
        <div >

            {props.todoprops.complete ?
                <span key={'todo1' + props.todoprops.id}
                    onClick={onclickspan}
                    //onClick={handleToggle()}
                >{props.todoprops.id} - {props.todoprops.task} </span> :
                <span key={'todo2' + props.todoprops.id} style={{
                    color: 'red'
                }} className="strike"
                    onClick={onclickspan}
                    //onClick={handleToggle()}
                >{props.todoprops.id} - {props.todoprops.task} </span>
            }
            <button onClick={props.propshandleEventDel}> - del </button>
        </div>
    )
}
