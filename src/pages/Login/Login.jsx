import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const{ signIn }  = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        .catch(error =>{
            console.error(error);
        })
    }


    return (
        <div>
            <div className="my-4 mb-10">
                <Navbar></Navbar>
            </div>
            <h2 className="text-3xl font-semibold text-center">Login your account</h2>
            <div>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
                <p className="text-base font-semibold text-center">Dont Have An Account ? <Link className="text-[#F75B5F]" to="/register">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;