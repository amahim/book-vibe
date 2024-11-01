import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;