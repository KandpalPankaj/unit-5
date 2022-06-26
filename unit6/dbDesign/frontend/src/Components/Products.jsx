import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {Link} from "react-router-dom"
export const Products = () => {
  const [prod, setProd] = useState([]);
  const getData = () => {
    axios({
      url: "http://localhost:8080/product",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => {
      // console.log(data);
      setProd(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div >
        <ul>
          <li>
            {/* <Link>Electronics</Link> */}
            <ul>
              <li>
                {/* <Link>Mobiles</Link> */}
                <ul>
                  <li>
                    {/* <a onClick={() => setCatId("62a338a617d183dfe65a7c4b")}>
                      Samsung
                    </a> */}
                  </li>
                  <li>
                    {/* <a onClick={() => setCatId("62a338a617d183dfe65a7c4b")}>
                      Redmi
                    </a> */}
                  </li>
                </ul>
              </li>
              <li>
                {/* <Link>Laptops</Link> */}
              </li>
              <li>
                {/* <Link>Speakers</Link> */}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div >
        {prod.map((e) => {
          return (
            <div>
              <h2>Name: {e.name}</h2>
              <p>Rs.{e.price}</p>
              <p>Brand : {e.brand}</p>
              <div>
                category :
                {e.categoryId.map((el) => (
                  <p>{el.categoryName}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
