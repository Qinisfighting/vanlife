import { Link, NavLink } from "react-router-dom"
import avatar from '../assets/avatar.png'

export default function Header() {
    return (
        <header>
            <Link to='/' className="site-logo">#VANLIFE</Link>
            <nav>
                <NavLink to='host'>
                   Host
                </NavLink>
                <NavLink to='about'>
                   About
                </NavLink>
                <NavLink to='vans'>
                   Vans
                </NavLink>
                <NavLink to='login' className="login-link">
                   <img 
                        src={avatar} 
                        className="login-icon"
                    />
                </NavLink>
            </nav>
        </header>
    )

}