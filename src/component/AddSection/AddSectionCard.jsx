import { Link } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal"; 

const AddSectionCard = ({craft}) => {
    const {_id, item_name,  short_description, url, } = craft;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <Slide>
                    <img src={url} alt="Shoes" />
                    </Slide>
                    </figure>
                <div className="card-body">
                <Fade>
                <h2 className="card-title">{item_name}</h2>
                    <p>{short_description}</p>
                </Fade>
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

export default AddSectionCard;