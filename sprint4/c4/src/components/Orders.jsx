import { useDispatch, useSelector } from "react-redux"
import {useEffect , useState} from "react"
import {admin} from "../Redux/actions"


export const Orders = () => {
    //  Get all data when admin logs in and populate it
    // store it in redux
    const [sortby, setSortby] = useState("id");

    const dispatch = useDispatch()
    const add = useSelector(store=>store.admin)
  async function getData(){
      let res= await fetch("http://localhost:8080/orders")
      let data =await res.json();
      dispatch(admin(data))
  }
  useEffect(()=>{
  getData();
  },[])
  function sortByThis(el) {
    setSortby(el.target.value);
    
  }

  var s;
  if(sortby==="id")
  {
    s = (a, b) => +a.id - +b.id;
  }
  if(sortby==="cost")
  {
    s = (a, b) => +a.cost - +b.cost;
  }
  if(sortby ==="status")
  {
    s = (a, b) => {
        const nameA = a.status.toUpperCase();
        const nameB = b.status.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
  
        return 0;
      };
  }
    return (
      <div>
        <div>
          <div>
            <select className="controls" name="progress" id="progress" onChange={sortByThis}>
              <option value="id">ID</option>
              <option value="status">Status</option>
              <option value="cost">Cost</option>
            </select>
          </div>
          <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Client Name</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Change Status</th>
                <th>Accept</th>
              </tr>
            </thead>
            { add.sort(s).map((e)=>( <tbody key={e.id}>
              
                <tr className="orders-row" >
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.status}</td>
                <td className="cost">{e.status==="Not Accepted" ? "-" : "$"+e.cost}</td>
                <td className="change-status">
                  {/* Show select dropdown only if status is Not Accepted */}
                  {e.status==="Not Accepted" ?<select className="changeStatus" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select> : null}
                </td>
                <td className="accept">
                  {/* Show this button only if status is Not Accepted */}
                  {/* on change make request to update it in db, and show changed status in table */}
                  {e.status==="Not Accepted" ?<button>Accept</button>:null}
                </td>
              </tr>
             
            </tbody> ))}
          </table>
        </div>
      </div>
    );
  };