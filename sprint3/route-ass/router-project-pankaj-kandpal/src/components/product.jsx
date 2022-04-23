import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = ({type}) => {
  const [proDetails, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      let res = await fetch(`http://localhost:8080/${type}/${id}`);
      let data = await res.json();
      setDetails(data);
    }
    getData();
  }, []);
  return (
      <div>
          <h2>Product name :{proDetails.name}</h2>
          <div>Brand : {proDetails.brand}</div> 
          <div>Price : {proDetails.price}</div>
          <img src={proDetails.image} alt="" className="productImg" />
          <br />
          <button>Add to cart</button>
      </div>
  )
};
