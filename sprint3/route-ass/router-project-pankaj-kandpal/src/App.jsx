import { useState } from 'react'

import './App.css'
import {Navbar} from './components/navbar';
import {Routes, Route} from 'react-router-dom'
import {Clothings} from "./components/clothings"
import {Electronics} from "./components/electronics";
import {Shoes} from "./components/shoes"
import {Footer} from "./components/footer";
import {Product} from './components/product'
import {Error} from './components/ErrorPage'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
       
        <Route path="/clothings" element={<Clothings></Clothings>}></Route>
        <Route path="/electronics" element={<Electronics></Electronics>}></Route>
        <Route path="/shoes" element={<Shoes></Shoes>}></Route>
        <Route path='/clothings/:id' element={<Product type="clothings"></Product>}></Route>
        <Route path='/electronics/:id' element={<Product type="electronics"></Product>}></Route>
        <Route path='/shoes/:id' element={<Product type="shoes"></Product>}></Route>

      </Routes>
      <hr />
      <Footer></Footer>
    </div>
  )
}

export default App
