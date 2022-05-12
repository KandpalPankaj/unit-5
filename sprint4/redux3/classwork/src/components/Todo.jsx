import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo,getTodos } from "../Redux/todo/action";


export const Todo = ()=>{
    const [text,setText] = useState("");
    const todos = useSelector(store=>store.todos.todos)
    const dispatch = useDispatch()
    const handleChange =(e)=>{
setText(e.target.value);

    }
const handleAdd=()=>{
    const payload = {
        title:text,
        status:false
    }
    console.log(payload)
    fetch("http://localhost:8080/todos",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }

    }).then(()=>{setText("")}).then(()=>{dispatch(getTodos())})
}

useEffect(()=>{
    dispatch(getTodos())
},[])

// const  getdata = async ()=>{
//     let res= await fetch("http://localhost:8080/todos");
//     let data = await res.json();
//     dispatch(addTodo(data))
// }
    return (
    <div>
        <input type="text" onChange={handleChange} value={text}/>
        <button onClick={handleAdd}>Add</button>
        {todos.map((e)=>(
            <div key={e.title}>{e.title}</div>
        ))}
    </div>
)

}