import { useEffect, useState } from "react"

function Counter() {
    const [number, setNumber] = useState(0)


    //herhangi bir state güncellendiği zaman useeffect ile yakalayabiliriz.
    useEffect(() => {
        console.log("number state güncellendi")
    }, [number])


    useEffect(() => {
        console.log("component mounth edildi.")

        const interval =setInterval(() =>{
            setNumber((n) => n + 1 )
        }, 1000)

        return () =>  clearInterval(interval)
    }, [])

    return (
        <div >
            <h1> {number}</h1>
            <button onClick={() => setNumber(number + 1)}>buton</button> 
        </div>
    )
}

export default Counter;