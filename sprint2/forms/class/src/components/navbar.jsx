import { Link } from "react-router-dom"


export const Navbar =()=>{
    const nav = [
        {title: "Stop Watch",to:"/"},
        {title:"Timer", to:"/timer"},
        
    ]

    return(
        <div>
            {nav.map((e,i)=>(
                <Link key={i} to={e.to} className="link">{e.title}</Link>
            ))}
        </div>
    )
}