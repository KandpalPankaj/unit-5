import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const counterRef =useRef(null)
 
useEffect(()=>{
  start();
},[])
  const start=()=>{
    counterRef.current=setInterval(()=>{
      setCounter((counter)=>{
        return counter+1;
      })
    },100)
  }
  return (
    <div className="App">
      <h3>Count:{counter}</h3>
      <button onClick={()=>(
        clearInterval(counterRef.current)
  )}>Pause</button>
      <button onClick={start}>Start</button>
      <button onClick={()=>{
        setCounter(0)
        clearInterval(counterRef.current)
      }}>Reset</button>
    </div>
  )
}

export default App
