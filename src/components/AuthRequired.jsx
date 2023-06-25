import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    
    const location = useLocation()
    //const isLoggedIn = localStorage.getItem("loggedin")
    const isLoggedIn = true 
    //in case the user dosen't want to sign up and sign in,  mannuelly set this to true for app demostration,

    if (!isLoggedIn) {
        alert("Please sign in first.")
        return (
            <Navigate
                to="/login"
                state={{ 
                    message: "Please sign in first.",
                    from: location.pathnameW
                }}
                replace
            />
        )
    }
    return <Outlet />
}