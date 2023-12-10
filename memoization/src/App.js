import { useState, useMemo , useCallback} from "react"
import './App.css';
import Header from "./components/Header";


function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("")
  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number])
  // const data = calculateObject();
  const increment = useCallback(()=>{
    setNumber((prevState) => prevState +1)
  }, [])

  return (
    <div className="App">
      <Header increment={increment} /* number={number < 5 ? 0 : number}* data={data} */  />
      <hr />
      <h1> {number} </h1>
      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number) {
  console.log('Calculating...');
  for( let i = 0; i< 100; i++) {}
  console.log('Calculating complete');
  return {name: "ahmet", number}
}

export default App;
