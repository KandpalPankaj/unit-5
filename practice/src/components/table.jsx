import { useEffect, useState } from "react";

export const Table = () => {
  const [table, setTable] = useState([]);
  const [rentSorted, setSort] = useState(0);
  const [codeSorted, setCode] = useState(0);
  
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/houses");
      let data = await res.json();
      setTable(data);
    }
    getData();
  }, []);
  var so;

  if (rentSorted === 0 && codeSorted === 0) {
    so = (a, b) => a;
  } else if (rentSorted === 1) {
    so = (a, b) => a.rent - b.rent;
  } else if (rentSorted === 2) {
    so = (a, b) => b.rent - a.rent;
  } else if (codeSorted === 1) {
    so = (a, b) => a.areaCode - b.areaCode;
  } else if (codeSorted === 2) {
    so = (a, b) => b.areaCode - a.areaCode;
  }

  

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Preferred</th>
          </tr>
        </thead>
        {table.sort(so).map((el) => (
          <tbody key={el.id}>
            <tr>
              <td>{el.name}</td>
              <td>{el.owner}</td>
              <td>{el.Address}</td>
              <td>{el.areaCode}</td>
              <td>{el.rent}</td>
              <td>{el.preferred}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={() => [setSort(1),setCode(0)]}>Sort Rent Low To High</button>
      <button onClick={() => [setSort(2),setCode(0)]}>Sort Rent High To Low</button>
      <button onClick={() => [setCode(1),setSort(0)]}>Sort Code Low To High</button>
      <button onClick={() => [setCode(2),setSort(0)]}>Sort Code High To Low</button>
     
    </div>
  );
};
