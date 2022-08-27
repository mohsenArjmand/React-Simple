import React from 'react'
import TodoList from './5-TodoList'

export default class TodosList extends React.Component {
    /* useState[todos, setTodos] = useState([])
     //setTodos(){}
      todos =
         [
             { id: 'a1', task: 'task1' },
             { id: 'a2', task: 'task2' }
         ]
         */
    state = {
        todos:
            [
                { id: 'a1', task: 'task1' },
                { id: 'a2', task: 'task2' },
                { id: 'a3', task: 'task3' },
                { id: 'a4', task: 'task4' }
            ]
    }
    handleEventAdd = () => {
        console.log("this");
        console.log("add");
    }
    handleEventDel(event) {
        this.state.
            console.log("this", event);
        console.log("this", event.target);
        //console.log(id);
    }
    render() {
        return (
            <div>
                <div>TodosList</div>
                {this.state.todos.map(
                    (todo) => {
                        return (<TodoList todoprops={todo} key={todo.id}
                            propshandleEventAdd={this.handleEventAdd}
                            propshandleEventDel={(event) => this.handleEventDel(event)}

                        />)
                    }
                )
                }
            </div>
        )
    }
}


