import { useState } from "react";
import { FaEyeSlash, FaEye  } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                    <div className="form-control">
            <h1 className="text-3xl font-bold text-center">Sing Up</h1>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" required 
               
                 />
             

              </div>
              <div className="form-control">
              <div className="text-center ">
          </div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required 
              
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input type="text" placeholder="image url" className="input input-bordered" required
                 />
                 

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required
                 />
                  <span className="absolute top-4 right-3" onClick={()=> setShowPassword(!showPassword)}>
                 {
                  showPassword ? <FaEye></FaEye> :  <FaEyeSlash></FaEyeSlash>
                 }</span>
               
                </div>
                

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
              <label>
                Have an account? {""}
                <Link to ="/login" className="lebel-text-alt link link-hover">
                Please Login
                </Link>
              </label>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SingUp;