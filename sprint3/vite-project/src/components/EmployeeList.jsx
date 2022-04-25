import { useEffect, useState } from "react";
import { EmployeeContext } from "./context/employeeContext";
import { useContext } from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"
export const EmployeeList = () => {
  const { list } = useContext(EmployeeContext);
  
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {list.map((el) => (
        <Link to={`/employees/${el.id}`}><div className="employee_card" key={el.id}>
          <img className="employee_image" src={el.image} />
          <span className="employee_name">{el.employee_name}</span>
          <span className="employee_title">{el.title}</span>
        </div></Link>
      ))}
    </div>
  );
};
