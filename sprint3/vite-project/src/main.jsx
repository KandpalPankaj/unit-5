import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EmployeeContextProvider } from "./components/context/employeeContext";
import { LoginContextProvider } from "./components/context/loginContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <LoginContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginContextProvider>
    </EmployeeContextProvider>
  </React.StrictMode>
);
