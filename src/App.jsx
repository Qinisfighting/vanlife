//import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Home from "./pages/Home"
import About from "./pages/About" 
import Vans from "./pages/Vans/Vans" 
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard" 
import Income from "./pages/Host/Income" 
import Hostvans from "./pages/Host/Hostvans" 
import HostvanDetails from "./pages/Host/HostvanDetails" 
import Reviews from "./pages/Host/Reviews" 
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Page404 from "./pages/Page404"


function App() {
  return (
    <BrowserRouter>
     <Routes>
     {/*https://reactrouter.com/en/main/start/concepts#index-routes  */} 
       <Route path="/" element={<Layout />}>  
         <Route index  element={<Home />} />
         <Route path='about' element={<About />} />
         <Route path='vans' element={<Vans />} />
         <Route path="vans/:id" element={<VanDetail />}/>       
     {/*1):id is a dynamic id variale, it should be identical to Vans.jsx line 19. 
        2)nested route is only used when you need to have a shared UI, here with vans detail route we don't need to nest.   */}
         <Route path="host" element={<HostLayout />}>   
            <Route index element={<Dashboard />} /> 
            <Route path="income" element={<Income />}  /> 
            <Route path="hostvans" element={<Hostvans />}  /> 
            <Route path="reviews" element={<Reviews />}  /> 
            <Route path="hostvans/:id" element={<HostvanDetails />}  > 
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route> 
         </Route>
         <Route path='*' element={<Page404 />} />
       </Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App
