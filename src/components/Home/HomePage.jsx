import { Link, NavLink } from "react-router-dom"; 
import ListedHomes from "./ListedHomes";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/authProvider";

export default function HomePage() {
  const {user} = useContext(AuthContext)
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("home.json")
      .then((res) => res.json())
      .then((data) => setHomes(data));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className=" rounded-3xl p-10 md:p-20 lg:p-32 bg-slate-100 mt-32 mx-4 md:mx-12 lg:mx-24 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://dropinblog.net/34246798/files/featured/Home_Interior__Budget_Friendly_Once_for_Every_Homeowner.png')" }}>
        <div className="text-white">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold p-5 font-serif">
            Home is a shelter from storms 
            <span className="block mt-4">all sorts of storms</span>
          </p>
          {user ? (
  <NavLink
    to="/Blog"
    
    className="btn border-none px-6 bg-green-500  hover:bg-green-500 text-white"
  >
   Learn More
  </NavLink>
) : (
  <NavLink
    to="/login"
    className="btn border-none px-6 bg-green-500  hover:bg-green-500 text-white"
  >
   Learn More
  </NavLink>
)}
        </div>
      </div>

      {/* Home List Heading */}
      <div className="font-bold text-4xl md:text-5xl text-center mt-16 font-serif">
        Home Lists
      </div>

      {/* Home Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 lg:px-24 mt-10 mb-20">
        {homes.map((home) => (
          <ListedHomes key={home.id} home={home} />
        ))}
      </div>
    </>
  );
}

    
    
