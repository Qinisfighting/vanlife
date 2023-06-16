import { useState } from "react"
import { Link } from "react-router-dom";

export default function Register() {
    const[formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:"",
        isNewsletter:false
    })


    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value 
        }))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        formData.password === formData.confirmPassword?
        formData.isNewsletter?
            alert("Successfully signed up and thanks for signing up for our newsletter!")
           :alert("Successfully signed up!")    
     :alert("Passwords do not match")
    }
    
    
    return (
        <div className="r-form-container">
            <form className="r-form" onSubmit={handleSubmit}>
                <input 
                   type="email"
                   placeholder="Email address"
                   className="form--input"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                 />
                  <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="isNewsletter"
                        checked={formData.isNewsletter}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label></div>
                  <button 
                    className="r-form--submit"
                >
                    Sign up
                </button>
            </form>
            <Link to="/register"
                    className="register"
                >
                    
            </Link>
        </div>
    )


}
