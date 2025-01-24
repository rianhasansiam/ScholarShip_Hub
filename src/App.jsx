import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Loading from "./Pages/Loading"
import { useContext } from "react"
import { contextData } from "./Contex"



function App() {



  return (
    <>
      <Navbar />



      <Outlet></Outlet>


      <Footer></Footer>


    </>
  )
}

export default App
