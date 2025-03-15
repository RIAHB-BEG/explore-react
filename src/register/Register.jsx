import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Register() {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registered Successfully!");
        setTimeout(() => navigate("/Blog"), 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Already registered!");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 mb-10 mt-28">
        <div className="card w-full max-w-md shadow-xl bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
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

            {/* Register Button */}
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>

            {/* Already have an account? */}
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline ms-1">
                Login
              </Link>
            </p>
          </form>

          <ToastContainer  />
        </div>
      </div>
    </>
  );
}
