import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
                loader: ()=> fetch('/news.json')
            
            },
            {
                path: "/about",
                element:<About></About>,
            },
            {
                path: "/career",
                element:<Career></Career>
            },
            {
                path:"/news/:id",
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
])
export default routes;
