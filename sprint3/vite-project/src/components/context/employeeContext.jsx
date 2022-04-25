import { createContext ,useEffect, useState } from "react";
export const EmployeeContext = createContext();

export const EmployeeContextProvider = ({children})=>{
    const [list,setList] = useState([]);

    useEffect(()=>{
      async function get(){
        let res= await fetch(" http://localhost:8080/employee")
        let data= await res.json();
        setList(data);
      }
      get();
    },[])

    return (
        <EmployeeContext.Provider value={{list}}>
            {children}
        </EmployeeContext.Provider>
    )
}