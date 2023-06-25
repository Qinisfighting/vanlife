import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { Suspense } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
    return defer({ vans: getHostVans() })
}


export default function Dashboard() {
    const dataPromise = useLoaderData()
    const isLoggedIn = localStorage.getItem("loggedin")
    

    function renderVanElements(hostVans){  
        const vansElements = hostVans.map(van => {
        const {id, imageUrl, name, price} = van
        return (
           
            <div key={id} className="dashboard-hostvan-tile">
              <Link to={`hostvans/${id}`}>
              <img src={imageUrl} alt={name} className="hostvan-img" style={{width:150, padding:"0 20px 20px"}} />
              <div className="hostvan-text">
                <h3>{name}</h3>
                <span>€{price}/day</span>   
              </div>
              </Link>
              <Link onClick={()=>alert("Please sign in first.")}><p className="span2" style={{padding:"25px 20px 0", fontSize:"1em"}}>🖊</p></Link>
            </div> 
            
        )
    })
    return (
        <div className="hostvans-lists">   
           {vansElements}
        </div>
    )
}   
      
      
    return (
    !isLoggedIn?
    <div className="nexted-container">   
         <div className="dashboard-welcome">
            <h2>Welcome</h2>
            <p className="main-title">Income last <u>30 days</u> <span className="span2"><Link to="income">Details</Link></span></p>
            <h1>€2,260</h1>  
         </div>
         <div className="dashboard-review">
            <p className="dashboard-review-title">Review score ⭐️ 5.0/5 <span className="span2"><Link to="reviews">Details</Link></span></p> 
         </div>
         <div className="hostvans-container">
            <h3 className="main-title" style={{padding:"20px 10px 0"}}>Your listed vans <span className="span2"><Link to="hostvans">View all</Link></span></h3>          
            <Suspense fallback={<h2>Loading hostvans...</h2>}> 
               <Await resolve={dataPromise.vans}>
                  {renderVanElements}               
               </Await>  
            </Suspense>  
            <Link onClick={()=>alert("Please sign in first.")}><p className="span2" style={{padding:"0 30px 100px", fontSize:"1.5em"}}>➕</p></Link>                                       
        </div>
    </div>
    :
    <div className="nexted-container">   
        <div className="dashboard-welcome">
          <h2>Welcome</h2>
          <p className="main-title">Income last <u>30 days</u></p>
          <h1>€0</h1>  
        </div>

        <div className="dashboard-review">
            <p className="dashboard-review-title">Review score ⭐️: You have no review.</p> 
        </div>

        <div className="hostvans-container">
            <h3 className="main-title" style={{padding:"20px 10px 0"}}>Your have no vans</h3>          
            <Link to="editvan"><p className="span2" style={{padding:"0 30px 100px", fontSize:"1.5em"}}>➕</p></Link>                                       
        </div>
    </div>
    )
}
