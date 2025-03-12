import { NavLink, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Helping from "./Helping";
import { getWishListFromLocalStorage } from "../js/localStorage";

export default function HomeDetails2() {
    const lists = useLoaderData() || []; // Ensure lists is always an array
    const [views, setViews] = useState([]); // Initialize views as an empty array

    useEffect(() => {
        if (Array.isArray(lists) && lists.length > 0) {
            const listed = getWishListFromLocalStorage() || []; // Ensure listed is always an array
            const filteredData = lists.filter((list) => listed.includes(list.id));
            setViews(filteredData);
        } else {
            setViews([]);
        }
    }, [lists]);

    return (
        <>
            <div className="text-center mt-44">
               {lists ?  (<NavLink to="/Listed Homes" className="p-4 max-w-lg mx-auto bg-slate-100 rounded-2xl font-bold text-4xl block">
                  Wishlist Homes 
                </NavLink>) : (<NavLink to="/Listed Homes" className="p-4 max-w-lg mx-auto bg-slate-100 rounded-2xl font-bold text-4xl block">
                  Wishlist Homes 
                </NavLink>)}
            </div>
            <div className="mt-20 mx-auto max-w-4xl border-b-2 mb-5 flex justify-center">
              
                   
                    <div className="dropdown mb-32">
  <div tabIndex={0} role="button" className="btn m-1 bg-blue-400 ">Easy To Find !</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow">
   <NavLink to="/home">
     <li><a>Home</a></li>
    </NavLink>
    <NavLink to="/about">
          <li><a>About</a></li>
    </NavLink>

  <NavLink to="/login">
     <li><a>Login Page </a></li>
  </NavLink>
   
   
  </ul>
</div>

                  

            
            </div>
            
                  {Array.isArray(views) && views.length > 0 ? (
                views.map((list) => <Helping key={list.id} list={list} />)
            ) : (
                ""
            )}
            
          
        </>
    );
}
