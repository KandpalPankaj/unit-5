import "./App.css";

export default function App() {
  const details = [
    {
      heading: "Mobile Operating Systems",
      title: ["Android", "Blackberry", "iPhone", "Windows Phone"]
    },

    {
      heading: "Mobile Manufacturers",
      title: ["Samsung", "HTC", "Apple", "Micromax"]
    }
  ];

  return (
    <div className="App">
      {details.map((el) => {
        let arr = el.title;
        return (
          <div>
            <Head heading={el.heading} />
            {arr.map((e) => {
              return <List list={e} />;
            })}
          </div>
        );
      })}
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
