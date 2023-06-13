import { Link } from "react-router-dom"
import page_error from "../assets/page_error.png"
import back_home from "../assets/back_home.png"

export default function Page404() {
    return (
    <div className="container-404">
        <img src={page_error} className="page_error" />
        <h1>Looks like you got lost.</h1>
        <Link to="/">
          <a>
          <h2><img src={back_home} className="back_home" /> Take me home, country roads ♫...</h2>
          </a>
        </Link>
   </div>
    )
}