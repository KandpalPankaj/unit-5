import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("sort_acc");
  const [page, setPage] = useState([]);
  const [next, setNext] = useState(1);
  const [color, setColor] = useState(searchParams.get("color") || []);
  const [cate, setCate] = useState(searchParams.get("cate") || []);

  useEffect(() => {
    getProduct();
  }, [color, cate, sort, next]);
  useEffect(() => {
    setSearchParams({ color, cate });
  }, [color, cate]);

  const getProduct = async () => {
    try {
      let res = await fetch(
        `http://localhost:8080/product?color=${color}&type=${cate}&sort=${sort}&page=${next}`
      );
      let result = await res.json();
      setData(result.product);
      setPage(result.pagecount);
    } catch (err) {
      console.log(err);
    }
  };
  const handleBrand = (e, value) => {
    setNext(1);
    if (value == "color") {
      if (e.target.checked) {
        setColor([...color, e.target.value]);
      } else {
        const result = color.filter((word) => word !== e.target.value);
        setColor(result);
      }
    } else if (value == "cate") {
      if (e.target.checked) {
        setCate([...cate, e.target.value]);
      } else {
        const result = cate.filter((word) => word !== e.target.value);
        setCate(result);
      }
    }
  };

  return (
    <div>
      <div>
        <div>Total Items : {data.length}</div>
        <div>
          Price Sorting
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="sort_acc">Low to High</option>
            <option value="sort_dec">High to Low</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h3>CATEGORY</h3>
            <ul>
              <li>
                <input
                  onChange={(e) => handleBrand(e, "cate")}
                  type="checkbox"
                  value="Shirt"
                />{" "}
                Shirt
              </li>
              <li>
                <input
                  onChange={(e) => handleBrand(e, "cate")}
                  type="checkbox"
                  value="Jeans"
                />{" "}
                Jeans
              </li>
              <li>
                <input
                  onChange={(e) => handleBrand(e, "cate")}
                  type="checkbox"
                  value="Shoes"
                />{" "}
                Shoes
              </li>
            </ul>
          </div>
          <div>
            <h3>COLORS</h3>
            <ul>
              <li>
                <input
                  onChange={(e) => handleBrand(e, "color")}
                  type="checkbox"
                  value="Black"
                />{" "}
                Black
              </li>
              <li>
                <input
                  onChange={(e) => handleBrand(e, "color")}
                  type="checkbox"
                  value="White"
                />{" "}
                White
              </li>
            </ul>
          </div>
        </div>
        <div>
          {data.map((e) => {
            return (
              <div key={e._id}>
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
      <div>
        <button
          onClick={() => {
            if (next > 1) {
              setNext(next - 1);
            }
          }}
        >
          &#60; Previous
        </button>{" "}
        Page no : {next}{" "}
        <button
          onClick={() => {
            if (next < page) {
              setNext(next + 1);
            }
          }}
        >
          Next &#62;;
        </button>
      </div>
    </div>
  );
};
