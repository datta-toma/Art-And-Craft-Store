import { useLoaderData } from "react-router-dom";
import { Flip } from "react-awesome-reveal";

const CraftCardDetails = () => {

    const details = useLoaderData();
   

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                  
                   <Flip>
                   <img src={details.url} className="max-w-sm rounded-lg shadow-2xl" />
                   </Flip>
                    
                    <div className="space-y-2 font-medium text-xl">
                    <Flip>
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
                    </Flip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCardDetails;