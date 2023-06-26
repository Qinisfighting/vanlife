import { useState } from "react"
import { Link,  useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api';

export default function Login() {
 
    const navigate = useNavigate();
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
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Successfully signed in!") 
            localStorage.setItem("loggedin", true) 
            navigate("/host")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert("User not found.")
            navigate(0)
        })
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
               required
             />
              <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
              <button 
                className="form--submit"
            >
                Sign in
            </button>
        </form>
        <Link to="/register"
                className="register"
            >
               ➳ Sign up
        </Link>
    </div>
       
    )
    

}
