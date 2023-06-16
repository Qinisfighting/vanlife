import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    //const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    const isLoggedIn = false

    if (isLoggedIn) {
        alert("Please log in first.")
        return (
            <Navigate
                to="/login"
                state={{ 
                    message: "Please log in first.",
                    from: location.pathname
                }}
                replace
            />
        )
    }
    return <Outlet />
}