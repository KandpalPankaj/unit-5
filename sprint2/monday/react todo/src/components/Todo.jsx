import { useState } from "react";

export function Todo({ getText }) {
  const [text, setText] = useState("");
  return (
    <div id="input">
      <input
        type="text"
        placeholder="Add a task"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="add"
        onClick={() => {
          getText(text);
        }}
      >
        +
      </button>
    </div>
  );
}
