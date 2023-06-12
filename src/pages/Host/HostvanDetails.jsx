
import { Link, NavLink, useParams, Outlet, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
    return getVans()
}

export default function VanDetail() {
    const params = useParams() // console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx line 19), output: {id: "2"}
    const hostvan = useLoaderData().filter(item => item.id === params.id)[0]
 
    const activeStyles = {
        fontWeight: 600,
        textDecoration: 'underline'
    }
   
    return (
    <div className="hostvan-detail-container">
      <Link to='/host/hostvans'><h3> ⪡ Back to your vans</h3></Link>
      {/*  to=".." relative="path"   equals   to='/host/hostvans'  */}
   
        <div className="hostvan-detail">
            <div className="hostvan-detail-header">
              <img src={hostvan.imageUrl} className="hostvan-detail-img"/>
             <div className='hostvan-detail-header-text'>
              <i className="hostvan-type">{hostvan.type}</i>
              <h2>{hostvan.name}</h2>
              <p className="hostvan-price"><span>€{hostvan.price}</span>/day</p>
            </div> 
            </div> 
            <nav className="hostvan-detail-body">
               <NavLink to='.' end style={({isActive}) => isActive ? activeStyles : null}>
                  Details
               </NavLink >
               <NavLink to='pricing' style={({isActive}) => isActive ? activeStyles : null}>
                  Pricing
               </NavLink>
               <NavLink to='photos' style={({isActive}) => isActive ? activeStyles : null}>
                  Photos
               </NavLink>
                 
            </nav> 
            <Outlet context={{ hostvan }}/>
        </div>
</div>)
}