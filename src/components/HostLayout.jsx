import { Link, NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function HostLayout() {

    const activeStyles = {
        color: 'rgb(77, 76, 76)',
        fontWeight: 600,
        textDecoration: 'underline'
    }

    return (
       <div className="host-container">
         <nav className="host-nav">     
           <NavLink to='.' style={({isActive}) => isActive ? activeStyles : null}>
              Dashboard
           </NavLink>
         <NavLink to='income' style={({isActive}) => isActive ? activeStyles : null}>
              Income
         </NavLink>
         <NavLink to='hostvans' style={({isActive}) => isActive ? activeStyles : null}>
              Vans
         </NavLink>
         <NavLink to='reviews' style={({isActive}) => isActive ? activeStyles : null}>
              Reviews
         </NavLink>       
       </nav>
       <Outlet />
       </div> 
    )
}