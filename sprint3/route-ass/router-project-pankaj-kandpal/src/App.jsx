import { useState } from 'react'

import './App.css'
import {Navbar} from './components/navbar';
import {Routes, Route} from 'react-router-dom'
import {Clothings} from "./components/clothings"
import {Electronics} from "./components/electronics";
import {Paintings} from "./components/paintings"
import {Footer} from "./components/footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/clothings" element={<Clothings></Clothings>}></Route>
        <Route path="/electronics" element={<Electronics></Electronics>}></Route>
        <Route path="/paintings" element={<Paintings></Paintings>}></Route>
      </Routes>
      <hr />
      <Footer></Footer>
    </div>
  )
}

export default App
