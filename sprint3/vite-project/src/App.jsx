import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/employees"} element={<EmployeeList></EmployeeList>}></Route >
        <Route path={"/employees/:id"} element={<ProtectedRoute><EmployeeDetails></EmployeeDetails></ProtectedRoute>}></Route >
        <Route path={"/admin"} element={<ProtectedRoute><Admin></Admin></ProtectedRoute>}></Route>
        <Route path={"/logout"} element={<Logout></Logout>}></Route>
      </Routes>
    </div>
  );
}

export default App;