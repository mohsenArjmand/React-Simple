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
            ],
        newtask: [{ id: '', task: '', complete: false }],
        newtext: ''
    }

    handleEventAdd = (e) => {
        e.preventDefault();
        console.log(this.state.newtask)
        let newcopy = [...this.state.todos, ...this.state.newtask];
        this.setState({ todos: newcopy })
        console.log(this.state.todos);
    }


    findArrayElementByTitle = (array, title) => {
        return array.find(
            (element) => {
                return element.title === title;
            })
    }
    handleEventDel(todoId) {
        console.log(todoId)
        var arrayTemp = [...this.state.todos];
        var index = arrayTemp.find(
            (element) => {
                return element.id === todoId;
            })
        if (index !== -1) {
            arrayTemp.splice(index, 1);
            console.log(arrayTemp.length)
            this.setState({ todos: arrayTemp })
        }
    }
    onchangeNewtext(e) {
        this.setState({ newtext: e.target.value })
        this.setState({ newtask: [{ id: this.state.todos.length + 1, task: e.target.value, complete: false }] })
    }
    render() {
        return (
            <div>
                <div>TodosList</div>
                <hr></hr>
                <AddTodo todoprops={this.state.todos}></AddTodo>
                <form>
                    <span>AddTodo New</span>
                    <input type="text" key={'newtext2'} value={this.state.newtext} onChange={this.onchangeNewtext.bind(this)} />
                    <button type='submit' onClick={this.handleEventAdd} key={'add2'}> + add </button>
                </form>
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


