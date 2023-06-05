import { Link } from "react-router-dom"
import { useState,useEffect } from "react"


export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {    
        fetch("/api/vans")   //from the mock server (server.js)
            .then(res => res.json())
            .then(data => setVans(data))
            
    }, [])

        const vansElements = vans.map(van => {
            const {id, imageUrl, name, price, type} = van
            return (
                <div key={id} className="vans-list">
                  <img src={imageUrl} alt={name} className="van-img"/>
                  <div className="van-text">
                    <h3>{name}</h3>
                    <span>€{price}/day</span>
                 </div>
                 <i className={`van-type ${type} selected`}>{type}</i>

               </div> 
            )
        })

    return (
        <div className="Vans-container">
            <h1>Explore our van options</h1>
            <div className="filters">
              <button className="simple"><Link to="simple">Simple</Link></button>
              <button className="rugged"><Link to="rugged">Rugged</Link></button>
              <button className="luxury"><Link to="luxury">Luxury</Link></button>
              
              <span className="clear-filters">Clear filters</span>
            </div>    
           
        {vansElements}                  
                       
            
        </div>
    )
}