import { useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {logIn} from "../login/action"
import {useNavigate} from "react-router-dom"
export const Login = ()=>{
    const [body,setBody] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const login = useSelector(store=>store.login)
    console.log(login)
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        setBody({
            ...body,
            [e.target.name]:e.target.value
        })
        dispatch(logIn(body))
    }

    const handleClick=()=>{
        
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
          })
            .then((response) => response.json())
            //Then with the data from the response in JSON...
            .then((data) => {
              console.log("Success:", data);
              localStorage.setItem("token",JSON.stringify(data))
              navigate("/")
            })
            //Then with the error genereted...
            .catch((error) => {
              console.error("Error:", error);
            });
    
    }
    return (
        <div>
            <input type="email" onChange={handleChange} name="email"/>
      <input type="password" onChange={handleChange} name="password"/>
      <input type="submit" onClick={handleClick}/>
        </div>
    )
}