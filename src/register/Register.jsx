import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Register(){
    return(

        <>

<div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 w-[900px] -mt-32 ">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link to="/login">Already have an account ? please Login</Link>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </>
    )
}