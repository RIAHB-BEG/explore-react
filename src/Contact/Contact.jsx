import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Contact(){
    return(
        <>
       <div className="ms-56 pt-24">
             <h1 className="text-3xl font-bold">
            Contact Page
        </h1>
        <div className="flex gap-72 mt-5">
<p className="font-bold  me-44">
        Check out our website for a wide range of self-serve solutions. please call <br />customer support or use or use one of these numbers
        </p>  

    <NavLink to={`/home`}>
<p className="btn bg-transparent border-black border-2 bg-white pe-5 ps-5 text-right">

        Home 

       
</p> 
    </NavLink>


       </div>
 

        </div> 
        <div className="ms-56">
        <div>
            <div  className="flex grid-cols-2 gap-10 mt-16 pb-44 ">
     <div className="bg-slate-200 ">
    <h1 className="font-bold text-3xl  mt-20 pe-20 ps-20">
            Need help ? Open a ticket
        </h1> 
        <p className="font-bold pe-20 ps-20  mt-5">
        Our support team will get back to you ASAP via email.


        </p>
             <div className="font-bold pe-20 ps-20 mt-5 flex gap-5 ">
           
            <div className="mt-3">
                 Your Name <br />
            <input type="text" name="" id="" placeholder="Enter Your Name" className=" pe-28 ps-5 pt-3 pb-3 mt-3"/>

            </div>
            <div className="mt-3">
            Your Email <br />
                     <input type="email" email="" id="" placeholder="Enter Your Email" className=" pe-28 ps-5 pt-3 pb-3 mt-3"/>   
            </div>
   
      
   
</div>
         <div className="mt-5 font-bold  pe-20 ps-20">
              Massage <br />
                     <input type="massage" email="" id="" placeholder="Massage" className=" pe-96 ps-5 pt-5 pb-28  mt-3"/>   
            </div>
            <div className="btn bg-blue-500 text-white  me-20 ms-20 mt-5 pe-10 ps-10 mb-20">
                Submit Ticket
            </div>
        </div> 
       <div className="bg-slate-200">
             <h1 className="font-bold text-3xl  mt-20 pe-10  ps-10">
        Subscribe to receive future <br /> updates
        </h1>

<p  className="font-bold pe-10 mt-3 ps-10 ">Lorem ipsum dolor sited Sed ullam corper <br />consectur adipiscing Mae ornare <br />massa quis lectus.</p>
<div className="font-bold ms-10   mt-8  ">
           
           <div className="mt-3">
                Your Name <br />
           <input type="text" name="" id="" placeholder="Enter Your Name" className=" pe-28 ps-5 pt-3 pb-3 mt-3"/>

           </div>
           <div className="mt-3">
           Your Email <br />
                    <input type="email" email="" id="" placeholder="Enter Your Email" className=" pe-28 ps-5 pt-3 pb-3 mt-3"/>   
           </div>
  
      
  
</div>
     <div className="btn text-white bg-blue-500 ms-10 mt-8  pe-36  ps-36 mb-5">
                Subscribe
            </div>
        
    <p className="-ms-8 font-bold  mb-5 text-center">No spam guaranteed, So please don’t <br /> send any spam mail.</p>
       </div>  

        </div>
        
            </div>
   

         
        </div>
        
        
    <Footer></Footer>
        </>
    )
}