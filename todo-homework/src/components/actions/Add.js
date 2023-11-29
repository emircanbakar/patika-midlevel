import React, { useState, useEffect } from 'react'

function Add({ todo, addTodo }) {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        const allHidden = todo.length === 0 ? false : todo.every((item) => item.completed);
        setIsChecked(allHidden);
    }, [todo]);

    const handleCheckboxChange = () => {
        const newHidden = !isChecked;
        setIsChecked(newHidden);
        const updatedTodo = todo.map((item) => ({ ...item, completed: newHidden }));
        addTodo(updatedTodo);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const text = e.target.value.trim();
            if (text !== "") {
                addTodo([...todo, { text, completed: false, hidden: false, }]);
                e.target.value = "";
            }
        }
    }

    return (
        <div className='add-container'>
            <input type="text" className='input-text' placeholder='What needs to be done?' onKeyDown={handleKeyDown} />
        </div>
    )
}

export default Add
