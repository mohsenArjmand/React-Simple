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

     findArrayElementByTitle = (array, title) => {
        return array.find(
            (element) => {
          return element.title === title;
        })
      }    
    handleEventDel(event) {
        console.log(event)


        /* first_try
        const filteredArray = this.state.todos.filter(id => id !== todoId)
        console.log(filteredArray);
        this.setState({ todos: filteredArray });
        */


        /*
        //second_try
        var index = this.state.todos.indexOf(todoId);
        console.log(index)
        if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
          this.setState({todos: this.state.todos.splice(index, 1)})
        }
        console.log(this.state.todos);
        */


        var arrayTemp = [...this.state.todos]; // make a separate copy of the array
        console.log(event)
        //var index = findArrayElementByTitle(arrayTemp,event)
        var index = arrayTemp.find(
            (element) => {
          return element.id === event;
        })
        //var index = arrayTemp.indexOf(event.target.value)
        if (index !== -1) {
            arrayTemp.splice(index, 1);
            console.log(arrayTemp.length)
          this.setState({todos: arrayTemp});
        }

    }
    render() {
        return (
            <div>
                <div>TodosList</div>
                {this.state.todos.map(
                    (todo) => {
                        return (<TodoList todoprops={todo} key={todo.id}
                            propshandleEventAdd={this.handleEventAdd}
                            propshandleEventDel={(todoId) => { this.handleEventDel(todo.id) }}
                        />)
                    }
                )
                }
            </div>
        )
    }
}


