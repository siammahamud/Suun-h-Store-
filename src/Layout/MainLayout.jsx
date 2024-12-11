import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const MainLayout = () => {
  return (
   <>
   <Header/>
   <div>
    <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default MainLayout