import { useEffect, useState } from 'react'
import { Route, Routes} from "react-router-dom"
import './App.css'
import {Books} from "./components/books"
import{Details} from "./components/details"
function App() {
 
  return (
    <div>
      

      <Routes>
        <Route path='/' element={<Books></Books>}></Route>
        <Route path='/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>

    
  )
}

export default App
