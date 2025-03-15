import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signout()
      .then(() => {
        toast.success("Logged out successfully!");
        
        // Delay navigation to ensure toast is displayed
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Delay in milliseconds to let the toast show
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error logging out!");
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="navbar px-6 md:px-10 lg:px-20 flex justify-between items-center py-4">
          {/* Left - Brand Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/Listed Homes"> WishList Homes</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                {user?.email && <li><NavLink to="/Blog">Blog</NavLink></li>}
              </ul>
            </div>
            {/* Brand Name */}
            <Link to="/home" className="text-2xl font-bold text-green-500">Make Your Live</Link>
          </div>

          {/* Center - Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-6 text-lg">
              <li><NavLink to="/home" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/Listed homes" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">Wishlist Homes</NavLink></li>
              <li><NavLink to="/about" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">About</NavLink></li>
              {user?.email && <li><NavLink to="/Blog" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">Blog</NavLink></li>}
              <li><NavLink to="/contact" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">Contact</NavLink></li>
              <li><NavLink to="/register" className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white">Login Page</NavLink></li>
            </ul>
          </div>

          {/* Right - Profile & Login/Logout Button */}
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cWUs3pYA_8DMiWUevXRneH3TNv59GLweTg8wjSufM4RMNDmTi3AR-uRqxSHV68aTxh-o9Q&s"
              className="w-10 h-10 rounded-full"
              alt="User Profile"
            />
            {user ? (
              <NavLink
                to="/login"
                onClick={handleLogOut}
                className="btn bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="btn bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
