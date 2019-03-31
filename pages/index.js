import React, { Component } from 'react'
import TodoList from '../components/index'
import '../style.css';

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <TodoList />
                <p> Copyright @ Ezeh Victor</p>
                 <p className='small'>email:vim64@yahoo.com</p>
            </div>
        )
    }
}
