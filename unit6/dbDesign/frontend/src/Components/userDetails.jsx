import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const UserDetails = () => {
  const { id } = useParams();
  const [det, setDet] = useState({});
  useEffect(() => {
    details();
  }, []);
  async function details() {
    try {
      let res = await axios.get(`http://localhost:8080/user/${id}`);
      setDet(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      
        <div>
          <div>"name:"{det.name}</div>
          <div>"email:"{det.email}</div>
        </div>
     
    </div>
  );
};
