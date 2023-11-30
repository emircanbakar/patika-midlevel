import React from 'react'
import Add from "./Todos/Add"
import List from "./Todos/List"
import { useState } from "react"
import "./style.css"


function Todo() {

  const [todos, setTodos] = useState([
    {
      text: "Learn React"
    },
  ])
  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: text }]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='container'>
      <h1>Todos</h1>
      <Add addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todo
