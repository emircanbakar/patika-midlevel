import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import User from "./components/User"
import Error404  from './components/Error404';



function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <>
            <Route path="/about" element={<About />} />
            <Route path="users/*" element={<Users />}>
              <Route path="user/:name/:id" element={<User />}></Route>
            </Route>
            <Route path="*" element={<Error404 />}></Route>
            <Route path="/" end element={<Home />} />
          </>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
