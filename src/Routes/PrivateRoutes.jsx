import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center my-80"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;