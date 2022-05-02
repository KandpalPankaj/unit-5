// /orders and /neworder are protected routes
import { useDispatch, useSelector } from "react-redux"


import {Navigate} from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(store=>store.login)
    if(!isAuth){
        return <Navigate to="/login" replace={true}></Navigate>
    }
    return children
};