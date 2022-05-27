import { useState } from "react";
import { Timer } from "./components/timer";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
