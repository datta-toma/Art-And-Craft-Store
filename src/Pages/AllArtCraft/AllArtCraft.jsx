import { useLoaderData } from "react-router-dom";
import CraftCrad from "./CraftCrad";
import { useState } from "react";


const AllArtCraft = () => {
    const loadedCrafts = useLoaderData();

    const [crafts, setCrafts] = useState(loadedCrafts);


    return (
        <div>
          <h2 className="text-5xl font-extrabold mt-10 text-center">All Art and Craft</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28 ">
          {
            crafts.length ? (
              crafts.map((craft) => (
                <CraftCrad key={craft._id} craft={craft} 
                crafts={crafts} setCrafts={setCrafts}
                ></CraftCrad>
              ))
            ) : (
              <p>No crafts available</p> // Display a message if there are no crafts
            )
          }
        
          </div>
          
        </div>
    );
};

export default AllArtCraft;