import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../api';

export default function Register() {

    const navigate = useNavigate();
    //const [isLoggedIn, setIsLoggedIn] = useState(false)
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
    
    async function handleSubmit(e) {
        e.preventDefault()
        if(formData.password === formData.confirmPassword){ 
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
            formData.isNewsletter?
            alert("Successfully signed up and thanks for signing up for our newsletter!")
           :alert("Successfully signed up!")    
        }else{
            alert("Passwords do not match")
        }     
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
                   required
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
                    required
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
