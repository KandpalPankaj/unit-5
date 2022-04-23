import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Shoes = ()=>{
    const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/shoes");
      let data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Shoes</h1>

      <div>
        {data.map((e) => {
          return (<Link to={`/shoes/${e.id}`} className="products">
          <h2 className="name">{e.name}</h2>
          <img src={e.image} alt="" className="productImg"/>
          </Link>
          )
        })}
      </div>
    </div>
  );
}