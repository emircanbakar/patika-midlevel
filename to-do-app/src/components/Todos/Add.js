import React, { useState } from 'react'


function Add({ addTodo }) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Yeni görev ekle"
                    className='todo-input'
                />
                {/* <button type="submit">Ekle</button> */}
            </form>
        </div>
    )
}

export default Add
