import { createContext ,useEffect, useState } from "react";
export const LoginContext = createContext();

export const LoginContextProvider = ({children})=>{
    const [isAuth,setAuth] = useState(false);

   const handleLogin=()=>{
       setAuth(true)

   }
const handleLogout =() =>{
    setAuth(false)
}
    return (
        <LoginContext.Provider value={{isAuth,handleLogin,handleLogout}}>
            {children}
        </LoginContext.Provider>
    )
}