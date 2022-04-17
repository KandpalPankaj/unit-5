import { useRef, useState } from "react";

export const Form = () => {
  const [show, setShow] = useState(false);
  const [table, setTable] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
  });
  const handleChange = (el) => {
    setFormData({
      ...formData,
      [el.target.id]: el.target.value,
    });
  };
  function saveData(e) {
    e.preventDefault();
    fetch("http://localhost:8080/employee", {
      method: "Post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    async function getData() {
      let res = await fetch("http://localhost:8080/employee");
      let data = await res.json();
      setTable(() => {
        return [...data, formData];
      });
      setShow(true);
    }
    getData();
  }

  return (
    <div>
      <form action="">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          id="name"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Age"
          id="age"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Address"
          id="address"
        />
        <select name="" id="department" onChange={handleChange}>
          <option value="">select your department</option>
          <option value="production">Production</option>
          <option value="service">Service</option>
        </select>
        <input
          onChange={handleChange}
          type="number"
          placeholder="salary"
          id="salary"
        />

        <input type="submit" onClick={saveData} />
      </form>

      {show ? (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          {table.map((el) => (
            <tbody>
              <tr>
                <td>{el.name}</td>
                <td>{el.age}</td>
                <td>{el.address}</td>
                <td>{el.department}</td>
                <td>{el.salary}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : null}
    </div>
  );
};
