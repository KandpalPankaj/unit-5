import { useState } from "react";
import { Form } from "./components/form";
import {Table} from "./components/table"
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>(
        setShow(!show)
      )}>{show? "show Form": "show house table"}</button>
      {show? null:<Form />}
      {show? <Table/>:null}
    </div>
  );
}

export default App;
