
import './App.css';

function App() {
  const link=["Services","Projects","About"]
  return (
    <div className="App">
     <Logo logo="LOGOBAKERY"/>
     <div className="links">
    {link.map((el)=>{
      return <Links links={el}/>
    })}
    <Bttn name="Contact"/>
     </div>
    </div>
  );
}
// Components

function Logo(props){
  return <h2 className="logo">{props.logo}</h2>
}
function Links(props)
{
  return <a href="a" className="l">{props.links}</a>
}

function Bttn(props){
  console.log(props.name)
  return <button className="btn">{props.name}</button>
}
export default App;
