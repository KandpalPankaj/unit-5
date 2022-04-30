import  {Navigate} from 'react-router-dom'


export const Private = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  if (token === "") {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
