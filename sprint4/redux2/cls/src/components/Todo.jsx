import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,getTodos } from "../Redux/action";

export const Todo = () => {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todos);
  console.log(todos,"todos")
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = async () => {
    let res = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: text,
        status: false,
      }),
    })
    let data = await res.json();
    // dispatch(getTodos())
  };
useEffect(()=>{
dispatch(getTodos())
},[])
  

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {todos.map((e) => (
        <div key={e.id}>{e.id}.{e.title} - {e.status? "Done":"Not Done"}</div>
      ))}
    </div>
  );
};
