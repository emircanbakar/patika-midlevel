import './App.css';
import Header from './components/Header';
import User from "./components/User"

const friends = [
  {
    id: 1,
    name: "ahmet"
  },
  {
    id: 2,
    name: "burak"
  },
  {
    id: 3,
    name: "eray"
  }
]

function App() {

  return (
    <div>
      <User name="emir" surname="bakar" age={22}
        isLoggedIn={true}
        friends={friends}
        address={{
          title: "İstanbul",
          zip: 34782
        }}
      />
    </div>
  )
}

export default App