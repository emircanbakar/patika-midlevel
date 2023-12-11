import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const data = useContext(ThemeContext)
    console.log(data)
    return (
        <div>
            <h2>button {data} </h2>
        </div>
    )
}

export default Button
