import { Children, useContext } from "react"
import {Navigate} from "react-router-dom";
import {LoginContext } from "./context/loginContext" 
export const ProtectedRoute=({children})=>{
    const {isAuth} = useContext(LoginContext)

if(!isAuth){
    return <Navigate to="/login" replace={true}></Navigate>
}
return children;
}