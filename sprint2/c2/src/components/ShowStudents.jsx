import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [table, setTable] = useState([]);
  const [sortby, setSortby] = useState("first_name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [num, setNum] = useState(0);

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/students");
      let data = await res.json();
      setTable(data);
    }
    getData();
  }, []);

  function sortByThis(el) {
    setSortby(el.target.value);
    setNum(0);
  }
  function sortingOrder(el) {
    setSortOrder(el.target.value);
    setNum(0);
  }
  function sortfunction() {
    if (sortOrder === "asc") {
      setNum(1);
    } else {
      setNum(-1);
    }
  }
  var s;
  if (num === 1 && sortby === "age") {
    s = (a, b) => +a.age - +b.age;
  } else if (num === -1 && sortby === "age") {
    s = (a, b) => +b.age - +a.age;
  } else if (num === 1 && sortby === "tenth_score") {
    s = (a, b) => +a.tenth_score - +b.tenth_score;
  } else if (num === -1 && sortby === "tenth_score") {
    s = (a, b) => +b.tenth_score - +a.tenth_score;
  } else if (num === 1 && sortby === "twelth_score") {
    s = (a, b) => +a.twelth_score - +b.twelth_score;
  } else if (num === -1 && sortby === "twelth_score") {
    s = (a, b) => +b.twelth_score - +a.twelth_score;
  } else if (num === 1 && sortby === "gender") {
    s = (a, b) => {
      const nameA = a.gender.toUpperCase();
      const nameB = b.gender.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    };
  }
  else if (num === -1 && sortby === "gender") {
    s = (a, b) => {
      const nameA = a.gender.toUpperCase();
      const nameB = b.gender.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      return 0;
    };
  }
  else if (num === 1 && sortby === "first_name") {
    s = (a, b) => {
      const nameA = a.first_name.toUpperCase();
      const nameB = b.first_name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    };
  }
  else if (num === -1 && sortby === "first_name") {
    s = (a, b) => {
      const nameA = a.first_name.toUpperCase();
      const nameB = b.first_name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      return 0;
    };
  }

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            onChange={sortByThis}
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            onChange={sortingOrder}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={sortfunction}>
          sort
        </button>
      </div>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        {table.sort(s).map((el) => (
          <tbody className="tbody" key={el.id}>
            {/* populate all rows like below: */}
            <tr className="row">
              <td className="first_name">{el.first_name}</td>
              <td className="last_name">{el.last_name}</td>
              <td className="email">{el.email}</td>
              <td className="gender">{el.gender}</td>
              <td className="age">{el.age}</td>
              <td className="tenth_score">{el.tenth_score}</td>
              <td className="twelth_score">{el.twelth_score}</td>
              <td className="preferred_branch">{el.preferred_branch}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
