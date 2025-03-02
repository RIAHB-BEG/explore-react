import { Link, NavLink } from "react-router-dom"; 
import ListedHomes from "./ListedHomes";
import { useEffect, useState } from "react";

export default function HomePage() {
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
          <button className="mt-6 px-6 py-3 bg-green-500 text-lg font-bold text-white rounded-lg shadow-md hover:bg-green-600 transition">
            <NavLink to="/login">Learn More</NavLink>
          </button>
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

    
    
