
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
     const navigate = useNavigate()
    return (
        <div id="container">
        <div className="left">E-commerce</div>
        <div className="right">
            <div onClick={()=>navigate('/home')}>Home</div>
            <div>Login</div>
            <div>signup</div>
        </div>
    </div>
    )
}