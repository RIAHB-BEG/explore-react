import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
export default function Register(){
const {signUp} = useContext(AuthContext)
const navigate = useNavigate()
const LogIn = () => toast("Log In Successfully");
  const handleregister =(e)=>{
e.preventDefault();

const form = new FormData(e.currentTarget)
const email = (form.get("email"))
const password = (form.get("password"))
signUp(email,password)
.then(result => {
  console.log(result.user)
navigate("/home")
})
.catch(error => console.error(error))
} 
    return(

        <>

<div className="mt-20 ">
  <div className="hero flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 w-[900px] mb-20  ">
      <form onSubmit={handleregister} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={LogIn} className="btn btn-primary">Login</button>
          <ToastContainer/>
        </div>

      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </>
    )
}