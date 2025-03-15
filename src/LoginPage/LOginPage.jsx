import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully!");

        
        setTimeout(() => {
          navigate("/Blog");
        }, 2000)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed! Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-6 mb-10 mt-28">
      <div className="card w-full max-w-md shadow-xl bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
              <span></span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Login Button */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>

          {/* Don't have an account? */}
          <p className="text-sm text-center mt-2">
            <span className="me-1">Don't have an account?</span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Please Register
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
