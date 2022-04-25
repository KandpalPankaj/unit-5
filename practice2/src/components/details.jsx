

import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"
export const Details =()=>{
    const [details,setDetails] = useState({})
const {id} = useParams();

useEffect(()=>{
    async function getData(){
      let res= await fetch(`http://localhost:8080/books/${id}`);
      let data = await res.json();
      setDetails(data);
    }
    getData(); 
  },[])

  return(
      <div>{details.title}</div>
  )
}