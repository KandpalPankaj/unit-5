import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/action";


export const Todo = ()=>{
    const [text,setText] = useState("");
    const todos = useSelector(store=>store.todos)
    const dispatch = useDispatch()
    const handleChange =(e)=>{
setText(e.target.value);
    }
const handleAdd=()=>{
    dispatch(
        addTodo({
            title:text,
            status:false
        })
    )

}
    return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
        {todos.map((e)=>(
            <div key={e.title}>{e.title}</div>
        ))}
    </div>
)

}