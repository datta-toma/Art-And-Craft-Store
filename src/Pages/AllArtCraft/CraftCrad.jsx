
const CraftCrad = ({craft}) => {
    const { subcategory_name, short_description, url, } = craft
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{subcategory_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CraftCrad;