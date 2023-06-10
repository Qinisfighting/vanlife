import { Link, useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react"


export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {    
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // tried to mock server (server.js) but sen't work...
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

   /** second way below for the filter function: we don't need to hard code the setSearchParams object property, 
    * instead to create a function with key value pair in string as parameters to merge(concanate) the new url part to the current one.
    * 
    * function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
         ...
     <button onClick={() => handleFilterChange("type", "simple")}>Simple</button>
     <button onClick={() => handleFilterChange("type", null)}>Clear filter</button>
    } */

    return (
        <div className="Vans-container">
            <h1>Explore our van options</h1>
            <hr />
            <div className="filters">
              <button className={`${typeFilter === "simple" ? "simple-selected" : "simple"}`}  onClick={() => setSearchParams({type: "simple"})}>Simple</button>
              <button className={`${typeFilter === "luxury" ? "luxury-selected" : "luxury"}`} onClick={() => setSearchParams({type: "luxury"})}>Rugged</button>
              <button className={`${typeFilter === "rugged" ? "rugged-selected" : "rugged"}`}  onClick={() => setSearchParams({type: "rugged"})}>Luxury</button>
              {/*or can wrap or replace the buttons here in/with <Link>, and e.g give path to="?type=simple" for switching filter, and to="." to clear filter, in this way setSearchParams will not be used*/}
             { typeFilter && <span className="clear-filters" onClick={() => setSearchParams({})}>Clear filters</span> }
            
            </div>    
           
            <div className="vans-lists">
                {vansElements}
            </div>                
                       
            
        </div>
    )
}