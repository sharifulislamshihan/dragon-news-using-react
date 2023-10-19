import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div>
            <h3 className="text-3xl mb-7 font-semibold">All Category</h3>
            {
                categories.map(category => <Link className="block w-full py-3 text-xl text-[#9F9F9F] px-11 hover:bg-slate-200 hover:text-black " key={category.id} to={`category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;