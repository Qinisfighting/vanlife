import { Link, useRouteError } from "react-router-dom"
import error_ from "../assets/error_.png"


export default function Error() {
    const error = useRouteError()
    console.log(error)
    
    return (
      
    <div className="error_">
        <img src={error_} className="error_img" />
        <h2>Error: {error.message}</h2>
        <pre>{error.status} - {error.statusText}</pre>
        <Link to="/">  
          <button>Return home</button> 
        </Link>
   </div>
 
    )
}