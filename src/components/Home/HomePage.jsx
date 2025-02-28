import { Link, NavLink } from "react-router-dom";
import ListedHomes from "./ListedHomes";
import { useEffect, useState } from "react";

export default function HomePage(){
  const [homes, sethomes] = useState([])

  useEffect(() => {
    fetch("home.json")
      .then((res) => res.json())
      .then((data) => sethomes(data))
  }, [])
  return(
    <>
<div>

  <div  className="rounded-3xl  p-32  bg-slate-100 mt-10 me-52 ms-56 flex text-center  bg-[url('https://dropinblog.net/34246798/files/featured/Home_Interior__Budget_Friendly_Once_for_Every_Homeowner.png')] ">
    <div >
   <p className="text-6xl font-bold p-10 ps-14 font-serif ">Home is a  shelter from storms <p className="mt-8"> all sorts of  storms</p>  </p> 
   <button className="btn m-5 bg-green-500 text-lg font-bold text-white ms-10">
 <NavLink to="/login">Learn More</NavLink>
    </button>
</div>

   </div>
   <div className="font-bold text-6xl text-center mt-24 font-serif">
    Home Lists
   </div>
</div>
<div className=" grid grid-cols-3 gap-10 me-60 ms-60 mt-10 mb-20 bg-slate-100">
         {homes.map((home) => (
      <ListedHomes key={home.id} home={home}></ListedHomes>// Added key prop
      ))}
    </div>       

   </>
  


    
    
  )
}