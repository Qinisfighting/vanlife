
//import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import avatar from '../assets/avatar.png'
import logout from '../assets/logout.png'

export default function Header() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const navigate = useNavigate();
    const activeStyles = {
        color: '#2c5e75e1',
        textDecoration: 'underline #2c5e75e1 1.5px'
    }
     
   
     function handleLogout(){    
        localStorage.removeItem("loggedin")
        
        navigate("/")
        alert("Successfully signed out!") 
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
                {
                !isLoggedIn?  
                  <img 
                    src={avatar} 
                    className="login-icon"/>           
                  :            
                  <img 
                    src={logout} 
                    className="logout-icon"
                    onClick={handleLogout}/>    
                }
                </NavLink>    
            </nav>
        </header>
    )

}