
import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

// eslint-disable-next-line react-refresh/only-export-components
export function loader( { params }) {
    console.log(params.id)
    return getVans(params.id)
}// console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx), output: {id: "2"}

export default function VanDetail() {
    const van = useLoaderData()
    const location = useLocation()
    const search = location.state?.filter || ""   //optional chaining, same like const search = location.state && location.state.filter || ""
    const type = location.state?.type || "all"
    
   

    return (
    <div className="van-detail-container">   
       <Link to={`..${search}`}><h3> ⪡ Back to {type} vans</h3></Link>
      {/** or slice out the type from the search url string(e.g '/vans/?type=rugged'), it start from index 12 until the end, 
         then render <h3> ⪡ Back to all {search.slice(12)} vans</h3>. */}
      
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className="van-type">{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>€{van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
</div>)
}