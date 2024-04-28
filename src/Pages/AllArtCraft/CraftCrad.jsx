import { Link } from "react-router-dom";

const CraftCrad = ({craft}) => {
    const {_id, item_name, subcategory_name, short_description, url, price, rating } = craft

   
    return (
        <div>                       
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p>{short_description}</p>
                    <p> Price: {price}</p>
                    <p> Rating: {rating}</p>
                    <div className="card-actions justify-center">
 
                    <Link to={`/craft/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                   
            
                  
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CraftCrad;