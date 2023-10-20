import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const {id} = useParams();
    console.log(id);

    const details = newsDetails.find(details => details._id === id)
    console.log(details);
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className="text-2xl font-semibold mb-7">Dragon News</h3>
            <div className="grid grid-cols-4 gap-11">
                <div className="col-span-3 ml-4">
                    <div className="mb-7">
                        <img className=" mb-10" src={details.image_url} alt="" />
                        <h3 className="text-3xl font-bold mb-9">{details.title}</h3>
                        <p className=" text-base text-[#706F6F] font-medium">{details.details}</p>
                    </div>
                    <Link to="/" className="btn btn-secondary">All news in this category</Link>
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default NewsDetails;