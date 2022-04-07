import "./App.css";

function App() {
  const food = "pizza";
  const skills=["js","html","css"]
  return (
    <div className="App">
      <h1>Hello {food}</h1>
      <div>{1 + 2 * 4}</div>
      <div>
        {skills.map((e)=>{
          return <Skill skill={e} />;
        })}
      </div>
      <Skill skill={"abc"}/>
    </div>
  );
}

// Component
function Skill(props){
  console.log(props.skill)
  return <p className="redtext"> Skill:{props.skill}</p>
}
export default App;
