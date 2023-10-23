import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Error = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <h2 className="text-4xl text-center mt-28">This page not found</h2>
            <div className="mx-auto text-center"><Link to='/'><button className="mt-3 text-center btn hover:bg-[#E76D66] hover:text-white">Back Home</button></Link></div>
        </div>
    );
};

export default Error;