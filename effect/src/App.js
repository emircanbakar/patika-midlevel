import { useEffect, useState } from "react"


function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("mehmet")

  //herhangi bir state güncellendiği zaman useeffect ile yakalayabiliriz.
  useEffect(() =>{
    console.log("number state güncellendi")
  }, [number])

  useEffect(() =>{
    console.log("name state güncellendi")
  }, [name])

  useEffect(( ) =>{
    console.log("component mounth edildi.")
  }, [] )

  return (
    <div className="App">
      <h1> {number}</h1>
      <button  onClick={() => setNumber(number+1)}>buton</button>
      <h1> {name}</h1>
      <button  onClick={() => setName("Mert")}>buton</button>
    </div>
  );
}

export default App;
