import React from 'react'
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    //another way for the onClick event, you can define the function in here and call in the button onClick 
    const increase = () =>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default Counter;