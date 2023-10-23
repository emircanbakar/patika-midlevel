import './App.css';
import Header from './components/Header';

const name = "Emir"
const surname = "Bakar"
const isLoggedIn = true


function App() {
  return (
    <div>
      {/* <h2>{name}</h2> */}
      {/* <h2>{`Benim adım ${name}, soyadım ${surname}`}</h2> */}
      <h2>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname} ` : `Giriş yapmadınız!` } </h2>
    </div>
  )
}

export default App