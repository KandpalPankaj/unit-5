import {CartContext} from "./contexts/cartContext"
import { useContext } from "react"

export const Navbar = ()=>{
    const value = useContext(CartContext)
    
    return (
        <div>
           Cart:{value.cart}
        </div>
    )
}