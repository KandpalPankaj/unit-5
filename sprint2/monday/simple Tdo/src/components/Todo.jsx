import { useState } from "react"

export function Todo({getText}){
  const [text,setText]=useState("")
  return <div>
    <input type="text" placeholder="Write Something" onChange={(e)=>{
     setText(e.target.value); 
    }}/>
    <button onClick={()=>{
      getText(text)
    }}>+</button>
    
  </div>
}