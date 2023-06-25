import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    //const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    const isLoggedIn = true

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