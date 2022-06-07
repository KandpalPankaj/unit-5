import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Product.css"

export const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setdata] = useState([]);
  const [color, setcolor] = useState(searchParams.get("color") || []);
  const [cate, setcate] = useState(searchParams.get("cate") || []);
  const [sort, setsort] = useState("sort_acc");
  const [page, setpage] = useState([]);
  const [next, setnext] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [color, cate,  sort, next]);
  useEffect(() => {
    setSearchParams({ color, cate });
  }, [ color, cate]);

  
  const fetchProduct = async () => {
    try {
      let res = await fetch(
        `http://localhost:8080/product?color=${color}&type=${cate}&sort=${sort}&page=${next}`
      );
      let result = await res.json();
      setdata(result.product);
      setpage(result.pagecount);

   
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlebrand = (e, value) => {
    setnext(1);
    if (value == "color") {
      if (e.target.checked) {
        setcolor([...color, e.target.value]);
      } else {
        const result = color.filter((word) => word !== e.target.value);
        setcolor(result);
      }
    } else if (value == "cate") {
      if (e.target.checked) {
        setcate([...cate, e.target.value]);
      } else {
       
        const result = cate.filter((word) => word !== e.target.value);
        setcate(result);
      }
    }
  };

  return (
    <div>
      <div className="Sorting">
        <div>Total Items : {data.length}</div>
        <div>
          Price Sorting
          <select
            onChange={(e) => {
              setsort(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="sort_acc">Low to High</option>
            <option value="sort_dec">High to Low</option>
          </select>
        </div>
      </div>
      <div className="mainContainer">
        <div className="filter_container">
          <div>
            <h3>CATEGORY</h3>
            <ul className="category">
              <li>
                <input
                  onChange={(e) => handlebrand(e, "cate")}
                  type="checkbox"
                  value="Shirt"
                />{" "}
                Shirt
              </li>
              <li>
                <input
                  onChange={(e) => handlebrand(e, "cate")}
                  type="checkbox"
                  value="Jeans"
                />{" "}
                Jeans
              </li>
              <li>
                <input
                  onChange={(e) => handlebrand(e, "cate")}
                  type="checkbox"
                  value="Shoes"
                />{" "}
                Shoes
              </li>
            </ul>
          </div>
          <div>
            <h3>COLORS</h3>
            <ul className="colors">
              <li>
                <input
                  onChange={(e) => handlebrand(e, "color")}
                  type="checkbox"
                  value="Black"
                />{" "}
                Black
              </li>
              <li>
                <input
                  onChange={(e) => handlebrand(e, "color")}
                  type="checkbox"
                  value="White"
                />{" "}
                White
              </li>
            </ul>
          </div>
        </div>
        <div className="Container">
          {data.map((e) => {
            return (
              <div key={e._id} className="product-card">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <div>
                  <p>Rs.{e.discount_price}</p>
                  <p>Rs.{e.main_price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagecount">
        <button
          onClick={() => {
            if (next > 1) {
              setnext(next - 1);
            }
          }}
        >
          &#60; Previous
        </button>{" "}
        Page no : {next}{" "}
        <button
          onClick={() => {
            if (next < page) {
              setnext(next + 1);
            }
          }}
        >
          Next &#62;;
        </button>
      </div>
    </div>
  );
};
