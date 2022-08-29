import React, { useEffect, useState } from 'react'

export default function AddTodo(props) {
    const [newtask, setNewtask] = useState('')
    const [todolist, setTodolist] = useState([...props.todoprops])

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newtask);
        setNewtask("");
    }

    const addTask = (userInput) => {
        let copy = [...todolist];
        let newcopy = [...copy, { id: todolist.length + 1, task: userInput ,complete:false}];
        setTodolist(newcopy);
        console.log(todolist);
    }

    return (
        <div>
            <form>
                <span>AddTodo</span>
                <input type="text" key={'newtext1'} value={newtask} onChange={(event) => setNewtask(event.target.value)} />
                <button type='submit' onClick={(event)=>handleSubmit(event)} key={'add1'}> + add </button>
            </form>
        </div>
    )
}
