import './App.css';
import { useState } from "react"

function App() {
  const [name, setName] = useState("Emir")
  const [age, setAge] = useState(21)
  const [friends, setFriends] = useState(["Burak", "Tolu"])
  const [address, setAddress] = useState({title: 'İstanbul', zipcode: '34782'})

  return (
    <div className="App">
      <h1> {name} </h1>
      <h2> {age} </h2>
      <button onClick={() => setName("Can")}>Change Name</button>
      <button onClick={() => setAge(22)}>Change Age</button>

      <hr />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
          <div key={index} >{friend}</div>
        ))}
        <button onClick={() => setFriends([...friends,"Ahmet"])}>add new friend</button>

        <hr />
        <h2>Address</h2>
        <div>{address.title} {address.zipcode} </div> 
        <button onClick={() =>setAddress({...address, title: "Ankara", /*</div>zipcode: "44444"*/ })}>Change the address</button>
    </div>
  );
}

export default App;
