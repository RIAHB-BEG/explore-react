import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HomePage from "../components/Home/HomePage";
import HomeDetails from "../components/Home/HomeDetails";
import Home from "../components/Home/Home";



export default function HomeLayout()  {



    return(
<>



    < Navbar></Navbar>  
   

<Outlet></Outlet> 

</>
   
    )
}