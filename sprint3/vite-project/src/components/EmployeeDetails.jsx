import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "./context/loginContext";
import { Navigate } from "react-router-dom";
export const EmployeeDetails = () => {
  const [emp, setEmp] = useState({});
  const [arr, setArr] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function get() {
      let res = await fetch(` http://localhost:8080/employee/${id}`);
      let data = await res.json();
      setEmp(data);
      setArr(data.tasks);
    }
    get();
  }, []);

  return (
    <div className="user_details">
      <img className="user_image" src={emp.image} />
      <h4 className="user_name">{emp.employee_name}</h4>
      <span className="user_salary">${emp.salary}</span>
      <span className="tasks">
        {arr.map((e) => (
          <li className="task">{e}</li>
        ))}
      </span>
      Status: <b className="status">{emp.status}</b>
      Title: <b className="title">{emp.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
