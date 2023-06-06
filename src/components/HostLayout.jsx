import { Link, NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function HostLayout() {
    return (
       <div className="host-container">
        <nav className="host-nav">
       
         <NavLink to='/host'>
              Dashboard
         </NavLink>
         <NavLink to='/host/income'>
              Income
         </NavLink>
         <NavLink to='/host/reviews'>
              Reviews
          </NavLink>
       
       </nav>
       <Outlet />
       </div> 
    )
}