import { useState,useContext } from "react";
import {LoginContext} from "./context/loginContext"
import {Navigate} from "react-router-dom"
export const Login = () => {
    //  use reqres to log user in.
const {isAuth,handleLogin} = useContext(LoginContext)
  const handleChange=(e)=>{
    console.log(e.target.name)
  }

 
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" onClick={handleLogin} />
      </form>
    );
  };