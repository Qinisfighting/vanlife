import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Home from "./pages/Home"
import About from "./pages/About" 
import Vans from "./pages/Vans/Vans" 
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard" 
import Income from "./pages/Host/Income" 
import Reviews from "./pages/Host/Reviews" 


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route element={<Layout />}>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/vans' element={<Vans />} />
         <Route path="/vans/:id" element={<VanDetail />}/>
         {/*:id is a dynamic id variale, it should be identical to Vans.jsx line 19   */}
         <Route element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} /> 
            <Route path="/host/income" element={<Income />}  /> 
            <Route path="/host/reviews" element={<Reviews />}  /> 
         </Route>  
       </Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App
