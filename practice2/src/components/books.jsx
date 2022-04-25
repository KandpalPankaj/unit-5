import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {Card} from "./card"

export const Books=()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
      async function getData(){
        let res= await fetch("http://localhost:8080/books");
        let data = await res.json();
        setData(data);
      }
      getData(); 
    },[])
    
    return (

        <div>
            {data.map((e)=>(
        <Link to={`/${e.id}`} key={e.id}><Card>
          <div>{e.title}</div>
          <div>price:{e.price}</div></Card></Link>
      ))}
        </div>
    )
}