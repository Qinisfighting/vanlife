import { RouterProvider,
         createBrowserRouter,
         createRoutesFromElements,
         Route
        } from "react-router-dom"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"
import Home from "./pages/Home"
import About from "./pages/About" 
import Register from "./pages/Register" 
import Vans, { loader as vansLoader } from "./pages/Vans/Vans" 
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard" 
import Income from "./pages/Host/Income" 
import Hostvans, { loader as hostVansLoader } from "./pages/Host/Hostvans" 
import HostvanDetails, { loader as hostVansDetailsLoader } from "./pages/Host/HostvanDetails" 
import Reviews from "./pages/Host/Reviews" 
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Page404 from "./pages/Page404"
import Login from "./pages/Login"
import AuthRequired from "./components/AuthRequired"


const router = createBrowserRouter(createRoutesFromElements(
  /*https://reactrouter.com/en/main/start/concepts#index-routes  */
  <Route path="/" element={<Layout />}>  
    <Route index  element={<Home />} />
    <Route path='register'  element={<Register />} />
    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />}>   
         <Route index element={<Dashboard />} loader={async() => {return null}}/> 
         <Route path="income" element={<Income />}  /> 
         <Route path="hostvans" element={<Hostvans />}  loader={hostVansLoader} errorElement={<Error />}/> 
         <Route path="reviews" element={<Reviews />}  /> 
         <Route path="hostvans/:id" element={<HostvanDetails />} loader={hostVansDetailsLoader} errorElement={<Error />}> 
           <Route index element={<HostVanInfo />} />
           <Route path="pricing" element={<HostVanPricing />} />
           <Route path="photos" element={<HostVanPhotos />} />
       </Route> 
      </Route>
    </Route>
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />}/>       
    {/*1):id is a dynamic id variale, it should be identical to Vans.jsx line 19. 
    2)nested route is only used when you need to have a shared UI, here with vans detail route we don't need to nest.   */}
    <Route path="login" element={<Login />} />  
    <Route path='*' element={<Page404 />} />  
    {/*catchall route with path='*' */} 
  </Route>
  
))


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
