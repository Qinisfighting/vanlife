import about_bg from "../assets/about_bg.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={about_bg} className="about-hero-image" />
            <div className="about-page-cta">
                <h2 className="about-h2">Your destination is waiting, your van is ready...</h2>         
                <p>Our mission is to enliven your road trip with the perfect travel van rental.</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <p>Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>  
                <br />
                <hr />
              
                
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}