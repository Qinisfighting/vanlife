
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function VanDetail() {
    const params = useParams() 
    const [van, setVan] = useState(null)
    const vanIndex = params.id-1
    
    // console.log(params) e.g when van with id 2 is clicked, output: {id: "2"}

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
        .then(res => res.json())
        .then(data => setVan(data[vanIndex]))
    }, [vanIndex])
    console.log(van)

    return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className="van-type">{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>)
}