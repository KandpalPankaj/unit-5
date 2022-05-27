import { useEffect, useState } from "react"

export const Counter = ()=>{
const [Count,setCount] = useState(0)

useEffect(()=>{
    console.log("mount")
    return ()=>{
        console.log("unmount")
    }
},[])
return(
    <div>{Count}</div>
)


}