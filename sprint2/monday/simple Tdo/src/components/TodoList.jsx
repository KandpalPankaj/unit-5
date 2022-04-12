import { useState } from "react";
import { Todo } from "./Todo";
import { Todoitem } from "./TodoItem";
export function TodoList() {
  const [todoList, setTodolist] = useState([]);

  function getText(data) {
    setTodolist([...todoList, data]);
  }

  return (
    <div>
      <Todo getText={getText} />
      {todoList.map((el) => (
        <Todoitem todoitem={el}> </Todoitem>
      ))}
    </div>
  );
}
