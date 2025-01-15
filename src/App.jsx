import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer></Footer>

      
    </>
  )
}

export default App
