
import { Link, NavLink, useParams, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { getVans } from "../../api"

export default function VanDetail() {
    const params = useParams() // console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx line 19), output: {id: "2"}
    const [hostvan, setHostVan] = useState(null)
    const [loading, setLoading] = useState(false)
    
    

    useEffect(() => {
        async function loadHostVan() {
            setLoading(true)
            const data = await getVans()
            setHostVan(data.filter(item => item.id === params.id)[0]) //setVan(data.filter(item=>({item.id===param.id})))
            setLoading(false)
         } 
        
        loadHostVan()

    }, [params.id])

    //console.log(hostvan)

    const activeStyles = {
        fontWeight: 600,
        textDecoration: 'underline'
    }
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
    <div className="hostvan-detail-container">
      <Link to='/host/hostvans'><h3> ⪡ Back to your vans</h3></Link>
      {/*  to=".." relative="path"   equals   to='/host/hostvans'  */}
      {hostvan ? (
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
    ) : <h2>Loading...</h2>}
</div>)
}