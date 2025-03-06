import { NavLink, Outlet } from "react-router-dom";

export default function ListedHomes({ home }) {
  const { image, estate_title, segment_name, status, price, area, id } = home || {};

  return (
    <>
  
        <NavLink to={`/home/${id}`} className="block">
      <div className="card bg-white w-full sm:w-80 md:w-96 shadow-lg border-2 md:ms-12  h-full flex flex-col transition-transform transform hover:scale-105">
        
        {/* Image Section */}
        <figure className="p-5 m-5 bg-zinc-100 rounded-xl">
          <img className="rounded-lg w-full h-auto" src={image} alt={estate_title} />
        </figure>

        {/* Card Body */}
        <div className="card-body flex flex-col flex-grow">
          
          {/* Title */}
          <h1 className="text-xl font-serif font-bold text-gray-800 mb-2"># {estate_title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-zinc-100 text-lime-500 rounded-full text-sm font-medium">
              #{segment_name}
            </span>
            <span className="px-3 py-1 bg-zinc-100 text-lime-500 rounded-full text-sm font-medium">
              #{status}
            </span>
          </div>

          {/* Area & Price */}
          <span className="font-bold px-3 py-1 bg-zinc-100 text-lime-500 rounded-full text-sm w-max">
            Area: {area}
          </span>
          <h2 className="text-lg font-bold mt-2 text-gray-700">Price: ${price}</h2>
        </div>
      </div>
     

    </NavLink> 
    

    
    
    </>

  );
}
