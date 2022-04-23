import { useState } from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/home';
import {About} from './components/about';
import {Navbar} from './components/navbar';
import {UserList} from './components/userList';
import {UserDetails} from './components/userDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<UserList></UserList>}></Route>
        <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
