import { Link, useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react"


export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {    
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
            .then(res => res.json())
            .then(data => setVans(data))
            
    }, [])
        const typeFilter = searchParams.get("type")
        const displayedType = typeFilter
            ? vans.filter(van => van.type === typeFilter)
            : vans
        const vansElements = displayedType.map(van => {
            const {id, imageUrl, name, price, type} = van
            return (
               
                <div key={id} className="van-tile">
                  <Link to={`/vans/${id}`}>
                  <img src={imageUrl} alt={name} className="van-img"/>
                  <div className="van-text">
                    <h3>{name}</h3>
                    <span>€{price}/day</span>   
                  </div>
                  </Link>
                 <div className='van-type'>{type}</div>
                 
                </div> 
                
            )
        })

        function handleFilterChange(key, value) {
            setSearchParams(prevParams => {
                if (value === null) {
                    prevParams.delete(key)
                } else {
                    prevParams.set(key, value)
                }
                return prevParams
            })
        }

    return (
        <div className="Vans-container">
            <h1>Explore our van options</h1>
            <hr />
            <div className="filters">
              <button className="simple"  onClick={() => handleFilterChange("type", "simple")}><Link to="simple">Simple</Link></button>
              <button className="rugged" onClick={() => handleFilterChange("type", "rugged")}><Link to="rugged">Rugged</Link></button>
              <button className="luxury"  onClick={() => handleFilterChange("type", "luxury")}><Link to="luxury">Luxury</Link></button>
              
              <span className="clear-filters" onClick={() => handleFilterChange("type", null)}>Clear filters</span>
            </div>    
           
            <div className="vans-lists">
                {vansElements}
            </div>                
                       
            
        </div>
    )
}