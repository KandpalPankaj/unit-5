import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";
export const UserDetails = () => {
  const [userData, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);
console.log(userData)
  return (
    <div>
      User ID:{id}
      <img src={userData.avatar} alt="" />
      <div>{userData.first_name}</div>
      <div>{userData.last_name}</div>
      
    </div>
  );
};
