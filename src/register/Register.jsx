import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function Register() {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registered Successfully!");
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration Failed!");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4">
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
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>

            {/* Already have an account? */}
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </form>

          <ToastContainer />
        </div>
      </div>

      <Footer />
    </>
  );
}
