import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <div>
                <BreakingNews></BreakingNews>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 ">
                    <h3 className="text-2xl my-3 font-semibold">Dragon News Home</h3>
                    {
                        news.map(anews => <NewsCart key={anews._id} news={anews}></NewsCart>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;