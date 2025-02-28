import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



export default function HomeLayout()  {



    return(
<>

   <div>
    <div className="bg-slate-100">

    < Navbar></Navbar>  
   

<Outlet></Outlet>

 </div>

      
</div>
</>
   
    )
}