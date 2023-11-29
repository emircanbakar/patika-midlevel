import React, { useState } from 'react'
import Add from './actions/Add'
import Filter from "./actions/Filter"

function Todos() {

    const [todos, setTodos] = useState([
        {
            job: "Learn Javascript",
            completed: false,
            hidden: false,
        },
        {
            job: "Learn React",
            completed: false,
            hidden: false,
        },
        {
            job: "Study Lessons",
            completed: false,
            hidden: false,
        },
    ])


    return (
        <div>
            <h1>Todos</h1>
            <div className="container">
                <Add todo={todos} addTodo={setTodos} />
                <Filter todo={todos} addTodo={setTodos} />
            </div>
        </div>
    )
}

export default Todos
