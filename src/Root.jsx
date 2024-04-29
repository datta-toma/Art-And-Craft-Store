import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./Pages/Footer";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Root = () => {
   
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 1500); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div>
            <Header />
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
                </div>
            ) : (
                <Outlet />
            )}
            <Footer />
        </div>
    );
};

export default Root;