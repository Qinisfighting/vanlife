/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

export function loader() {
    return getHostVans()
}

export default function Hostvans() {
 
    const hostVans = useLoaderData().filter(item => item.hostId === '123')
    
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
                 
                </div> 
                
            )
        })

      
    return (
       <div className="hostvans-container">
            <h2>Your listed vans</h2>          
            <div className="hostvans-lists">
                {vansElements}
            </div>                                     
            
        </div>
    )
}
