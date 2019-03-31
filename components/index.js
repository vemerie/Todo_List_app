import React, { Component } from 'react'
import '../style.css';

export default class TodoList extends Component {
constructor(props){
super(props)
this.state={
    userInput:'',
    list:[]
    }
}
    handleChange(input){
        this.setState({
            userInput:input
        })
    }    
    handleAddTodo(input){
        let ListArray = this.state.list
        ListArray.push(input)
        this.setState({
            list:ListArray,
            userInput:''
        })

    }

    handleDelete(input){
        let ListArray = this.state.list
        ListArray.splice(input,1)
        this.setState({
            list:ListArray
        })

    }

    render() {
        return (
            <div className="Todolist">
                <div className='top'>
                    <h2>Todo App</h2>
                    <input 
                    placeholder='Add Item to list'
                    type="text"
                    onChange={(e)=>this.handleChange(e.target.value)} 
                    value={this.state.userInput}

                    />
                <button className="add" onClick={()=>this.handleAddTodo(this.state.userInput)}>Add Item To List</button>
                </div>
                
                <h3>TODO LIST</h3>
                <table>
                    <tr>
                        <th>Todo Item</th>
                       
                    </tr>
                {this.state.list.map((value,i)=>
                <div>
                    <tr>
                        <td>{value}</td>
                        <td><button className="delete" onClick={()=>this.handleDelete(i)}>Delete</button></td>
                    </tr>
                </div>
                )}
                </table>
            </div>
        )
    }
}



  