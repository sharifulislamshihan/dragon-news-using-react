import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from '../../../assets/user.png'
const Navbar = () => {
    const NavLinks = <>
        <NavLink to="/"><li><a>Home</a></li></NavLink>
        <NavLink to="/about"><li><a>About</a></li></NavLink>
        <NavLink to="/career"><li><a>Career</a></li></NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="w-9 rounded-full"> <img src={userDefaultPicture} alt="" /> </div>

                    <Link to="/login">
                        <button className="btn bg-black text-white hover:bg-black px-5 ">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;