/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { Suspense } from "react"

export function loader() {
    return defer({ vans: getHostVans() })
}

export default function Hostvans() {
 
    const dataPromise = useLoaderData()
    

    function renderVanElements(hostVans){  
        const vansElements = hostVans.map(van => {
        const {id, imageUrl, name, price} = van
        return (
           
            <div key={id} className="hostvan-tile">
              <Link to={id}>
              <img src={imageUrl} alt={name} className="hostvan-img" />
              <div className="hostvan-text">
                <h3>{name}</h3>
                <span>€{price}/day</span>   
              </div>
              </Link>
              <Link onClick={()=>alert("Please log in first.")}><p className="span2" style={{padding:"40px 20px 0", fontSize:"1em"}}>🖊</p></Link>
            </div> 
            
        )
    })
    return (
        <div className="hostvans-lists">
           {vansElements}
        </div> 
    )
}   
      
      
    return (
       <div className="hostvans-container">

         <h2>Your listed vans</h2>          
        <Suspense fallback={<h2>Loading hostvans...</h2>}> 
          <Await resolve={dataPromise.vans}>
            {renderVanElements}               
          </Await>  
        </Suspense>                                     
        <Link onClick={()=>alert("Please log in first")}><p className="span2" style={{padding:"0 30px 100px", fontSize:"1.3em"}}>➕</p></Link>    
        </div>
    )
}
