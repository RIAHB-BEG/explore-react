import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  

     return(
      
        <div className="pt-20 me-52 ms-52">


            <div className="navbar bg-slate-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Make Your Live</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg">
        <li>
        <NavLink to="/home"  className="btn bg-transparent border-green-400 text-green-400 duration-0 me-4">Home</NavLink>
        </li>

              {/* <li>    
              <NavLink to="/about"  className="btn bg-transparent border-green-400 text-green-400 duration-0 me-4">About</NavLink>
              </li> */}
            <li>
          
            <NavLink to="/contact"  className="btn bg-transparent border-green-400 text-green-400 duration-0 me-4"> Contact</NavLink>
             
             
            </li>
<li>
          
          <NavLink to="/login"  className="btn bg-transparent border-green-400 text-green-400 duration-0 me-4">Login Page</NavLink>
           
           
          </li>  
         
             
          </ul>
        </div>
        <div className="navbar-end gap-10 ">
          <Link to="/login">
            <button className="btn bg-lime-500 p-4 pb-10 rounded-xl text-white text-lg">Sign In</button>
          
          </Link>
        
          <button className="btn bg-teal-500 p-4 pb-10 rounded-xl text-white text-lg">Sign Up</button>
        </div>
      </div>
    
        </div>
      
     )
       
       

    
 
}
    