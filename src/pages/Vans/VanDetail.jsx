
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../../api"
import { Suspense } from "react"
// eslint-disable-next-line react-refresh/only-export-components
export function loader( { params }) {
    return defer({ van: getVans(params.id) })
}// console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx), output: {id: "2"}

export default function VanDetail() {
    const dataPromise = useLoaderData()
    const location = useLocation()
    const search = location.state?.filter || ""   //optional chaining, same like const search = location.state && location.state.filter || ""
    const type = location.state?.type || "all"
    const isLoggedIn = localStorage.getItem("loggedin")

 function handleClick() {
    !isLoggedIn && alert("Please sign in first.")
 } 

    return (
    <div className="van-detail-container">   
       <Link to={`..${search}`}><h3> ⪡ Back to {type} vans</h3></Link>
      {/** or slice out the type from the search url string(e.g '/vans/?type=rugged'), it start from index 12 until the end, 
         then render <h3> ⪡ Back to all {search.slice(12)} vans</h3>. */}
      
      <Suspense fallback={<h2>Loading...</h2>}> 
         <Await resolve={dataPromise.van}>
          {van => (<div className="van-detail">
                     <img src={van.imageUrl} />
                     <i className="van-type">{van.type}</i>
                     <h2>{van.name}</h2>
                     <p className="van-price"><span>€{van.price}</span>/day</p>
                     <p>{van.description}</p>
                     <button className="link-button" onClick={handleClick}>Rent this van</button>
                   </div>)
            }                          
        </Await>  
        </Suspense>          
</div>)
}