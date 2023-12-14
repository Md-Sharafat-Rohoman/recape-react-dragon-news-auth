import { useLoaderData } from "react-router-dom";
import Header from "../Shard/Header/Header";
import LeftSideNav from "../Shard/LeftSideNav/LeftSideNav";
import Navbar from "../Shard/Navbar/Navbar";
import RightSideNav from "../Shard/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news constainer */}
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews =><NewsCard 
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;