import { useState } from "react";
import { Button } from "./components/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button color="white" background="blue">Primary Button</Button>
      <Button border="1px solid" >Default Button</Button>
      <Button border="1px dashed">Dashed Button</Button>
      <Button >Text Button</Button>
      <Button color="blue">Link Button</Button>
      </div>
  );
}

export default App;
