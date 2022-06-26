import "./App.css";
import { Users } from "./Components/Users";
import { Routes, Route } from "react-router-dom";
import { UserDetails } from "./Components/userDetails";
import { Navbar } from "./Components/Navbar";
import {AddUSer} from "./Components/AddUser";
import {Products} from "./Components/Products"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/user/create" element={<AddUSer/>}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="user/:id" element={<UserDetails></UserDetails>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
