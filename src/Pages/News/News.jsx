import { useParams } from "react-router-dom";
import Header from "../Shard/Header/Header";
import RightSideNav from "../Shard/RightSideNav/RightSideNav";
import Navbar from "../Shard/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-4xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;