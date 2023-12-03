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
import Users from './views/Users/Users';
import DashboardLayout from './compoents/DashLayout/DashboardLayout';
import Items from './views/Items/Items';
import AddUser from './views/Users/AddUser';
import EditUser from './views/Users/EditUser';

function App() {

  // authentication checking
  const authChecked = useAuthCheck();

  // checking authentication
  if (!authChecked) return <div style={{ textAlign: 'center' }}>Checking authentication....</div>

  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth>
          <DashboardLayout title='Dashboard'>
            <Home />
          </DashboardLayout>
        </RequireAuth>}></Route>

        <Route path="/items" element={<RequireAuth>
          <DashboardLayout title='Items'>
            <Items />
          </DashboardLayout>
        </RequireAuth>}></Route>

        <Route path="/user" element={<RequireAuth>
          <DashboardLayout title='Users'>
            <Users />
          </DashboardLayout>
        </RequireAuth>}></Route>

        <Route path="/user/add" element={<RequireAuth>
          <DashboardLayout title='Add User'>
            <AddUser />
          </DashboardLayout>
        </RequireAuth>}></Route>

        <Route path="/user/edit/:userId" element={<RequireAuth>
          <DashboardLayout title='Edit User'>
            <EditUser />
          </DashboardLayout>
        </RequireAuth>}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
