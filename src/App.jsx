import './App.css'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Auth/Login/Login';
import Signup from './views/Auth/Signup/Signup';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
