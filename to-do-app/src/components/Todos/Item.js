import React from 'react'

function Item({ text, deleteTodo }) {
    return (
        <li>
            {text}
            <button onClick={deleteTodo}>Sil</button>
        </li>
    )
}

export default Item
