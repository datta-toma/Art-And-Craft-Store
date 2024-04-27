import { useLoaderData } from "react-router-dom";
import CraftCrad from "./CraftCrad";
const AllArtCraft = () => {
    const crafts = useLoaderData();
    return (
        <div>
          <h2 className="text-5xl font-extrabold mt-10 text-center">All Art and Craft</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28 ">
          {
            crafts.map(craft => <CraftCrad key={craft._id} craft={craft}></CraftCrad>)
          }
          </div>
          
        </div>
    );
};

export default AllArtCraft;