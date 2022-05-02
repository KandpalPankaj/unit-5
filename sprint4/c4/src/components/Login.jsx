import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {logIn ,user} from "../Redux/actions"
export const Login = () => {
    const [un,setUn] = useState("");
    const [pas,setPas] = useState("");
   
    const isAuth = useSelector(store=>store.login)
  
    const dispatch = useDispatch()
    const navigate = useNavigate();
    async function getData(){
        let res = await fetch(" http://localhost:8080/users");
        let data = await res.json();
        
        for(let i=0;i<data.length;i++)
        {
            if(data[i].username==un && data[i].pass==pas && un=="admin" && pas=="1234")
            {
                dispatch(logIn(true))
                navigate("/orders")
            }
            else if (data[i].username==un && data[i].pass==pas)
            {
                dispatch(logIn(true))
                dispatch(user(data[i].username))
                navigate("/neworder")
            }
            
        }
        console.log(isAuth)
    }
const handleChange = (e)=>{
    if(e.target.name =="username"){
        setUn(e.target.value);
    }
    else{
        setPas(e.target.value)
    }
}

    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={getData}>Login</button>
      </div>
    );
  };