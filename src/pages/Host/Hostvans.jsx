import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function Hostvans() {
    const [hostVans, setHostVans] = useState([])
    useEffect(() => {    
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
            .then(res => res.json())
            .then(data => setHostVans(data.filter(item => item.hostId === '123')))
            console.log(hostVans)
            
    }, [hostVans])

        const vansElements = hostVans.map(van => {
            const {id, imageUrl, name, price} = van
            return (
               
                <div key={id} className="hostvan-tile">
                  <Link to={`/host/hostvans/${id}` }>
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
