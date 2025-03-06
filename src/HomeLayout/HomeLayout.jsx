import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";




export default function HomeLayout()  {



    return(
<>



    < Navbar></Navbar>  


    <Outlet></Outlet>
    <Footer></Footer>

</>
   
    )
}