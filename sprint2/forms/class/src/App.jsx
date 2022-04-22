import { useEffect, useRef, useState } from "react";
import "./App.css";
import {Stopwatch} from "./components/stopWatch";
import {Timer} from "./components/timer";
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar";
function App() {
  let current = new Date();
let cDate =  current.getDate()+ '/' + (current.getMonth() + 1) + '/' +  current.getFullYear()+' ';
let cTime =  current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + '  ' + cTime;
  return (
    <div className="App">
      <Navbar ></Navbar>
      <h3>{dateTime}</h3>
      <hr />
      <Routes>
        <Route path="/" element={<Stopwatch/>}></Route>
        <Route path="/timer" element={ <Timer/>}></Route>
      </Routes>
      
     <hr />
     <h2>Created by "Pankaj Kandpal"</h2>
     <h4>Thanks for visiting</h4>
    </div>
  )
}

export default App;
