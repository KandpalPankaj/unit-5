import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Users} from "./Components/Users"
import {Routes,Route} from 'react-router-dom'
 import {UserDetails} from "./Components/userDetails"
function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Users></Users>
      <Routes>
        <Route path="/user/:id" element={<UserDetails></UserDetails>}></Route>
      </Routes>
    </div>
  )
}

export default App
