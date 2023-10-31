import './App.css';
import Header from './components/Header';
import User from "./components/User"


function App() {
  return (
    <div>
      <User name="emir" surname="bakar" isLoggedIn={true} />
    </div>
  )
}

export default App