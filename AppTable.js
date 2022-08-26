import React, { Component } from 'react'
import './AppTable.css'

export default class AppTable extends Component {
    constructor() {
        super()
        this.state = {
            users: [
            ],
            toggle: true,
            spanortext:""
        }
    }




    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (userdata) => {
                    this.setState({
                        users: userdata
                    });
                }
            )
    }
    editToggle = () => {
        this.setState({ toggle : !this.state.toggle})
    }
    changeSpanOrText = (event) => {
        this.setState({spanortext : event.target.value})
    }
    render() {
        console.log(this.state.users)

        return (
            <div>
                <table>
                    <thead>
                        <tr key={'trhead 1'}>
                            <th key={'username 1'}>
                                usename
                            </th>
                            <th key={'email 1'}>
                                email
                            </th>
                            <th key={'address 1'}>
                                address
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.users.map((user) => {
                            return (<tr>
                                <td key={'username' + user.id} >
                                    {user.username}
                                </td>
                                <td key={'email' + user.id} >
                                    {user.email}
                                </td>
                                <td key={'city' + user.id} >
                                    {user.address.city}
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <br></br>
                <hr></hr>
                <br></br>
                {this.state.toggle ?  <input type="text" onChange={this.changeSpanOrText} value={this.state.spanortext} />  
                : <span> {this.state.spanortext}</span> }
                <button onClick={this.editToggle} style={{backgroundColor :'red' }}>Edit</button>
            </div>
        )
    }
}
