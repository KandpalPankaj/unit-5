import { useState } from "react";
import { Todo } from "./Todo";
import { Todoitem, Completeditem } from "./TodoItem";
import { nanoid } from "nanoid";

export function TodoList() {
  const [todoList, setTodolist] = useState([]);

  function getText(data) {
    const payLoad = {
      title: data,
      status: false,
      id: nanoid(5)
    };
    setTodolist([...todoList, payLoad]);
  }
  const handleStatus = (id) => {
    const newArr = todoList.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          status: !el.status
        };
      }
      return el;
    });

    setTodolist(newArr);
  };

  return (
    <div>
      <div>
        <Todo getText={getText} />
        {todoList.map((el) => (
          <Todoitem todoitem={el} handleStatus={handleStatus}></Todoitem>
        ))}
      </div>
      <div id="completedDiv"> Completed Task</div>
      {todoList.map((el) => (
        <Completeditem
          todoitem={el}
          handleStatus={handleStatus}
        ></Completeditem>
      ))}
    </div>
  );
}
