import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className="text-3xl font-bold">This is home</h3>
        </div>
    );
};

export default Home;