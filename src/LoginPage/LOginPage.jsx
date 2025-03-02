// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import { useContext } from "react";
// import { SignContext } from "../authProvider/SignInProvider"; // Ensure this exists

// export default function LOginPage() { // Fix component name
//   const { signIn } = useContext(SignContext);
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();

//     const form = new FormData(e.currentTarget);
//     const email = form.get("email");
//     const password = form.get("password");

//     signIn(email, password)
//       .then((result) => {
//         console.log("Logged in user:", result.user);
//         navigate("/home"); // Change to "/" if needed
//       })
//       .catch((error) => console.error("Login error:", error));
//   };

//   return (
//     <>
//       <div className="mb-20">
//         <div className="hero flex-col lg:flex-row-reverse mt-20">
//           <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 w-[900px]">
//             <form onSubmit={handleSignIn} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//               <div className="text-center mt-4">
//                 <Link to="/register" className="text-blue-500 underline">New to this site? Please register.</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
