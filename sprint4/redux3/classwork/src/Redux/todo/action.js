
export const ADD_TODO = "ADD_TODO"

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const getTodos = ()=>async(dispatch)=>{
  let res = await fetch("http://localhost:8080/todos")
    let data = await res.json();
    dispatch(addTodo(data))
}