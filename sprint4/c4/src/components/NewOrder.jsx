import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export const NewOrder = () => {
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    const use = useSelector((store) => store.user);
    const [d,setD] = useState([])
console.log(use)
async function getData(){
    let res = await fetch(`http://localhost:8080/orders?owner_name=${use}`);
    let data = await res.json();
    setD(data)
    
}
useEffect(()=>{
getData();
},[])
console.log(d)
    return (
      <div>
        <div className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            readOnly
            value={use}
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit">submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
          {d.map((e)=>(
          <div className="past-orders">
            <span className="id"></span>{e.id}. <span className="problem">{e.problem}</span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}{e.status==="not accepted" ? "" :"$"+e.cost}
            </span>
            <p className="status">Status:{e.status} </p>
            <hr />
          </div>))}
        </div>
      </div>
    );
  };