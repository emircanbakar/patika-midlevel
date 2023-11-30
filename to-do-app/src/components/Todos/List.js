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
                        <input
                            type="checkbox"
                            checked={checkedTodos.includes(todo.id)}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Sil</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
