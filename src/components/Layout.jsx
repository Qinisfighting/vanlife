import Header from "./Header"
import Footer from "./Footer"

import { Outlet } from "react-router-dom" //Outlet is so to say all the children from App.jsx  <Route element={<Layout />}>

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
          <main>
            <Outlet />
          </main> 
            <Footer />        
        </div>
    )
}