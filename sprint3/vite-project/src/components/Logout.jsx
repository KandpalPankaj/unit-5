import { useState,useContext } from "react";
import {LoginContext} from "./context/loginContext"
import {Navigate} from "react-router-dom"

export const Logout = () => {
    // log user out. it's just an inmemory value in context api
    const {handleLogout} = useContext(LoginContext)
    handleLogout();
    return <div></div>;
  };