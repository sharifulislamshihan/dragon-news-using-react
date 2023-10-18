import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <BreakingNews></BreakingNews>
            </div>
            <Navbar></Navbar>
            <h3 className="text-3xl font-bold">This is home</h3>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">News coming soon!!!!</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;