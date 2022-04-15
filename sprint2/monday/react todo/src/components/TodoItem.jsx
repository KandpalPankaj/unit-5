import { useState } from "react";

const Todoitem = ({ todoitem, handleStatus }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <div className="todo">
          <div className="checkbox">
            <input
              type="checkbox"
              onClick={() => {
                handleStatus(todoitem.id);
                setShow(!show);
              }}
            />
          </div>
          <div className="title">
            {todoitem.title}
            <button className="rem" onClick={() => setShow(!show)}>
              x
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Completeditem = ({ todoitem, handleStatus }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {todoitem.status && show ? (
        <div className="todo">
          <div className="title2">
            <div>{todoitem.title}</div>
            <button className="rem" onClick={() => setShow(!show)}>
              x
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Todoitem, Completeditem };
