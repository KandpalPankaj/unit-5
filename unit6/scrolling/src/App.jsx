import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(25)
  const [data,setData] = useState([]);
  let arr=[];
  
  
  useEffect(()=>{
    for(let i=0;i<count;i++)
    {
      arr.push("Masai student"+ (i+1))
    }
    setData(arr)
    
  },[count])
 const handleScroll = ()=>{
  console.log("hi")
      setTimeout(()=>
          setCount((prev)=>prev+25)
      ,500)
     
   
 }
 function throttle(fun,delay)
{
    let flag=true;
    return function(){
        if(flag){ fun();
        flag=false;
         setTimeout(()=>flag=true,delay)
        }
        
    }
}
  return (
    <div className="App">
     <div id='div' onScroll={throttle(handleScroll,500)}>
        {data.map((e)=>(
          <div>{e}</div>
        ))}
     </div>
    </div>
  )
}

export default App
