import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary bg-[#D72050] text-white">Breaking News</button>
            <Marquee   className="text-lg font-semibold">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;