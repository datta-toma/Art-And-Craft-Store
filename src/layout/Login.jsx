
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                             <h1 className="text-3xl font-bold text-center">Login</h1>
                            <label className="label">
                                 <span className="label-text">Email</span>
                            </label>
                               <input type="email" placeholder="email" className="input input-bordered" required  />
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
                        <label>
                            Please here? <Link to="/sign-up" className="label-text-alt link link-hover">Sign Up</Link>
                        </label>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;