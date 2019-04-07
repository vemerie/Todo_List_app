import React, { Component } from 'react'
import TodoList from '../components/index'
import '../style.css';

  const Main=(props)=> {
        return (
            <div className="main">
                <TodoList todoInitial={props.apiData.data}/>
                <p> Copyright @ Ezeh Victor</p>
                 <p className='small'>email:vim64@yahoo.com</p>
            </div>
        )
    }

//getting the Initial Props from the locally hosted express Api
    Main.getInitialProps = async function() {
        const res = await fetch('http://localhost:3000/api/data')
        const apiData = await res.json()
        return {
           apiData
        }

}

export default Main;