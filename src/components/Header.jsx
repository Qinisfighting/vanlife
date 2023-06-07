import { Link, NavLink } from "react-router-dom"
import avatar from '../assets/avatar.png'

export default function Header() {
    const activeStyles = {
        color: '#2c5e75e1',
        textDecoration: 'underline #2c5e75e1 1.5px'
    }

    return (
        <header>
            <Link to='/' className="site-logo">#VANLIFE</Link>
            <nav>
                <NavLink to='host' style={({isActive}) => isActive ? activeStyles : null}>
                   Host
                </NavLink>
                <NavLink to='about' style={({isActive}) => isActive ? activeStyles : null}>
                   About
                </NavLink>
                <NavLink to='vans' style={({isActive}) => isActive ? activeStyles : null}>
                   Vans
                </NavLink>
                <NavLink to='login' className="login-link" style={({isActive}) => isActive ? activeStyles : null}>
                   <img 
                        src={avatar} 
                        className="login-icon"
                    />
                </NavLink>
            </nav>
        </header>
    )

}