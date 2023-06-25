import Header from "./Header"
import Footer from "./Footer"

import { Outlet } from "react-router-dom" //Outlet is all the children from App.jsx  <Route element={<Layout />}>

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