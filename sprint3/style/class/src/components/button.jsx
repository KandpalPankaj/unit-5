import "./button.css";
import styled from "styled-components";
const Button = styled.button`
  background-color: ${(props)=>(props.background? props.background :"white")};
  border:${(props)=>(props.border? props.border :"none")};
  color:${(props)=>(props.color? props.color :"black")};
  margin:20px;
  
  &:hover{
    background-color:grey;
  }
`;

export { Button };
