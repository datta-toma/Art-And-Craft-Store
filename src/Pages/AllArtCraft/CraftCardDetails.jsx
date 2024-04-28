import { useLoaderData } from "react-router-dom";


const CraftCardDetails = () => {

    const details = useLoaderData();
   
    // item_name, subcategory_name, short_description, price, rating , url, processing_time, stockStatus, User_Email, User_Name, Customization 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={details.url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-2 font-medium text-xl">
                    <h1 className="text-5xl font-bold">{details.item_name}</h1>
                    <p>Subcategory Name: {details.subcategory_name}</p>
                    <p>Short description: {details.short_description}</p>
                    <p>Price: {details. price}</p>
                    <p>Rating: {details.rating}</p>
                    <p>User Name: {details.User_Name}</p>
                    <p>User Email: {details.User_Email}</p>
                    <p>StockStatus: {details.stockStatus}</p>
                    <p>Customization: {details. Customization}</p>
                    <p>Processing time: {details.processing_time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCardDetails;