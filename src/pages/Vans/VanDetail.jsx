
import { Link, useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


export default function VanDetail() {
    const params = useParams() // console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx line 19), output: {id: "2"}
    const [van, setVan] = useState(null)
    const location = useLocation()
    

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
        .then(res => res.json())
        .then(data => setVan(data.filter(item => item.id === params.id)[0])) //setVan(data.filter(item=>({item.id===param.id})))
    }, [params.id])
    console.log(van)
    //<Link to={`..${search}`}>
    // className={`${typeFilter === "simple" ? "simple-selected" : "simple"}`}
    const search = location.state?.filter || ""   //optional chaining
    return (
    <div className="van-detail-container">
       
       <Link to={`..${search}`}><h3> ⪡ Back to vans</h3></Link>
     
      
      {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className="van-type">{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>€{van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>)
}