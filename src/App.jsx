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
import Reviews from "./pages/Host/Reviews" 


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
         </Route>  
       </Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App
