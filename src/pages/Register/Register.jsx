import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.prevent.default();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }


    return (
        <div>
            <div className="mb-7">
                <Navbar></Navbar>
            </div>
            <h2 className="text-3xl font-semibold text-center">Register your account</h2>
            <div>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
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
                        <div className="mt-3">
                            <label className="label">
                                <input type="checkbox" name="" id="" /> <p className="ml-3">Accept terms and conditions</p>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-1">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                </form>
                <p className="text-base font-semibold text-center">Already Have An Account ? <Link className="text-[#F75B5F]" to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;