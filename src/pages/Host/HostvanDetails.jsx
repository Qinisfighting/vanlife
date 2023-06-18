
import { Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { Suspense } from "react"
// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
    return defer({ van: getHostVans(params.id) })
}

export default function VanDetail() {
    const dataPromise = useLoaderData()
    const activeStyles = {
        fontWeight: 600,
        textDecoration: 'underline'
    }
   
    return (
    <div className="hostvan-detail-container">
      <Link to='/host/hostvans'><h3> ⪡ Back to your vans</h3></Link>
      {/*  to=".." relative="path"   equals   to='/host/hostvans'  */}
   
      <Suspense fallback={<h2>Loading...</h2>}> 
         <Await resolve={dataPromise.van}>
          {hostvan => (<div className="hostvan-detail">
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
                        <Link onClick={()=>alert("Please log in first.")}><p className="span2" style={{padding:"0 30px", fontSize:"2em"}}>🖊</p></Link>
                     </div>)
            }                          
         </Await>  
      </Suspense>     
</div>)
}