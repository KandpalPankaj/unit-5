import { CartContext } from "./contexts/cartContext"
import { useContext } from "react"

export const Body = ()=>{
    const {handleCart} = useContext(CartContext)
    return (
        <div style={{
            width:"100px",
            height:"100px",
            backgroundColor:"grey"
        }} >
            <button onClick={()=>{
                handleCart(1)
            }}>Add to cart</button>
        </div>
    )
}