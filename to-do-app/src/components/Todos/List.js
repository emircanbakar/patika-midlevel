import React, { useState } from 'react'

function List({ todos, deleteTodo }) {
    const [checkedTodos, setCheckedTodos] = useState([]);

    const toggleTodo = (id) => {
        if (checkedTodos.includes(id)) {
            setCheckedTodos(checkedTodos.filter((checkedId) => checkedId !== id));
        } else {
            setCheckedTodos([...checkedTodos, id]);
        }
    };
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <input
                                type="checkbox"
                                className='checkbox-input'
                                checked={checkedTodos.includes(todo.id)}
                                onChange={() => toggleTodo(todo.id)}
                            />
                        </div>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
