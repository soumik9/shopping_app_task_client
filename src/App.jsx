import './App.css'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Auth/Login/Login';
import Signup from './views/Auth/Signup/Signup';
import useAuthCheck from './hooks/useAuthCheck';
import RequireAuth from './compoents/RequiredAuth';

function App() {

  // authentication checking
  const authChecked = useAuthCheck();

  // checking authentication
  if (!authChecked) return <div style={{ textAlign: 'center' }}>Checking authentication....</div>

  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth>
          <Home />
        </RequireAuth>}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
