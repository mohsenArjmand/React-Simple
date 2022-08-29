import React from 'react'
import TodoList from './5-TodoList'
import AddTodo from './6-AddTodo';


export default class TodosList extends React.Component {
    state = {
        todos:
            [
                { id: 'a1', task: 'task1', complete: false },
                { id: 'a2', task: 'task2', complete: false },
                { id: 'a3', task: 'task3', complete: false },
                { id: 'a4', task: 'task4', complete: false }
            ]
    }
    handleEventAdd = () => {
        console.log("this");
        console.log("add");
    }

    findArrayElementByTitle = (array, title) => {
        return array.find(
            (element) => {
                return element.title === title;
            })
    }
    handleEventDel(todoId) {
        console.log(todoId)

        var arrayTemp = [...this.state.todos]; // make a separate copy of the array
        //var index = findArrayElementByTitle(arrayTemp,event)
        var index = arrayTemp.find(
            (element) => {
                return element.id === todoId;
            })
        //var index = arrayTemp.indexOf(event.target.value)
        if (index !== -1) {
            arrayTemp.splice(index, 1);
            console.log(arrayTemp.length)
            this.setState({ todos: arrayTemp });
        }
    }
    render() {
        return (
            <div>
                <div>TodosList</div>
                <hr></hr>
                <AddTodo todoprops={this.state.todos}></AddTodo>
                <hr></hr>
                {this.state.todos.map(
                    (todo) => {
                        return (<TodoList todoprops={todo} key={todo.id}
                            propshandleEventAdd={this.handleEventAdd}
                            propshandleEventDel={(todoId) => { this.handleEventDel(todo.id) }}
                        />)
                    })}
            </div>
        )
    }
}


