import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { getVans } from "../../api"

export default function Hostvans() {
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {   
        async function loadHostVans() {
            setLoading(true)
            const data = await getVans()
            setHostVans(data.filter(item => item.hostId === '123'))
            setLoading(false)      
        }
        
        loadHostVans()
            
    }, [hostVans])

   

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
