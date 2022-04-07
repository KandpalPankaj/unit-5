import "./App.css";

function App() {
  const list1 = ["Android", "Blackberry", "iphone", "Windows Phone"];
  const list2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <Head heading={"Mobile Operating System"} />
      <ui>
        {list1.map((el) => {
          return <List list={el} />;
        })}
      </ui>
      <Head heading={"Mobile Manufactures"} />
      <ui>
        {list2.map((el) => {
          return <List list={el} />;
        })}
      </ui>
    </div>
  );
}

// components

function Head(props) {
  return <h1>{props.heading}</h1>;
}
function List(props) {
  return <li>{props.list}</li>;
}
export default App;
