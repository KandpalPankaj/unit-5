

import {Routes , Route } from 'react-router-dom'
import { Users } from './components/Users'
import {Products} from './components/Products'
import {Navbar} from './components/Navbar'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Users />}></Route>
        <Route path="/home" element ={<Products />}></Route>
      </Routes>
    </div>
  )
}

export default App
