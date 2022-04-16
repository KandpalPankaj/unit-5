import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function getdata(){
      try{
        let res= await fetch("http://localhost:8080/todo")
        let data = await res.json();
          setTodo(data);
      }
      catch (err){

      }
    }
    getdata()
      },[])
  
 
  
  return (
    <div className="App">
     z
    </div>
  );
}

export default App;
