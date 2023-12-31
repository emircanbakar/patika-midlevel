import { useEffect, useState } from "react"

function Counter() {
    const [number, setNumber] = useState(0)


    //bütün state güncellendiği zaman useEffect ile yakalayabiliriz, eğer dependency array ( [] ) varsa hangi stateye bakmak istediğimiz spesifikleşir.
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