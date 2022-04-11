import { useState } from "react";
import "./styles.css"

function App() {
  const [score,setScore]=useState(0);
  const [wicket,setWicket]=useState(0);
  const [over,setOver]=useState(0);
  
const a=Math.floor((over*10)%10);
console.log(a)
if(over){
  let A=over+"";
  if(A.length>3)
  { let overNew="";
    for(let i=0;i<3;i++)
    {
      overNew+=A[i];
    }
    overNew=+overNew
    setOver (overNew)
  }
}
if(a>5)
{
  let A=over+"";
   
   let one=+A[0]+1
   
    setOver (one+"."+0)
    
}
let win;
if(score>100)
{
win="India Won"
}
  const handleScore=(value)=>{
   return setScore (score+value)
  }
  const handleWicket=(value)=>{
    return setWicket (wicket+value)
   }
   const handleBall=(value)=>{
    //  console.log(over)
    return setOver (+(over)+value)
   }
  return (
    <div className="App">
      <h3>India:</h3>
      
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
        </div>
     

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{handleScore(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{handleScore(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handleScore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{handleWicket(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handleBall(0.1)}}>Add 1</button>
      </div>

      { <h1 className="status">{win}</h1>
      
        /* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;