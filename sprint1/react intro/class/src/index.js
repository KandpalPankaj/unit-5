import { sum } from "./calc.js";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

console.log(sum(5, 4));

const root = document.getElementById("root");
// const h1 = React.createElement("h1", { className: "red" }, "Hello React"); //tag,attribute,innertext
// ReactDOM.render(
//   h1, //what
//   root //where
// );

ReactDOM.render(
  <div className="red">
    <h1>Hello React</h1>
  </div>,
  root
);

// const h1 = document.createElement("h1");
// h1.innerText = "hello pankaj";
// h1.id = "red";
// root.append(h1);
