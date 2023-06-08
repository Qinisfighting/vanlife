import { Link } from "react-router-dom"
import { useState,useEffect } from "react"


export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {    
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
            .then(res => res.json())
            .then(data => setVans(data))
            
    }, [])

        const vansElements = vans.map(van => {
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

    return (
        <div className="Vans-container">
            <h1>Explore our van options</h1>
            <hr />
            <div className="filters">
              <button className="simple"><Link to="simple">Simple</Link></button>
              <button className="rugged"><Link to="rugged">Rugged</Link></button>
              <button className="luxury"><Link to="luxury">Luxury</Link></button>
              
              <span className="clear-filters">Clear filters</span>
            </div>    
           
            <div className="vans-lists">
                {vansElements}
            </div>                
                       
            
        </div>
    )
}