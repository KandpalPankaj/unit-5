import { useState } from 'react'
import {Navbar} from './component/navbar'
import './App.css'
import {Body} from './component/cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Body/>
    </div>
  )
}

export default App
