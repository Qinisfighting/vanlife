import { useState } from "react"

export default function Login() {
    const[formData, setFormData] = useState({
        email: "",
        password: ""
    })


    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        alert("Successfully logged in!")
    }
    
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
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
                  <button 
                    className="form--submit"
                >
                    Sign in
                </button>
            </form>
        </div>
    )


}

