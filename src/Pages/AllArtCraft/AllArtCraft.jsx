import { useLoaderData } from "react-router-dom";
import CraftCrad from "./CraftCrad";
import { useState } from "react";

const AllArtCraft = () => {
    const crafts = useLoaderData();

    const [sortSubcategory, setSortSubcategory] = useState("");

    const sortedCrafts = sortSubcategory
        ? crafts.filter((craft) => craft.subcategory_name === sortSubcategory)
        : crafts;

    return (
        <div>
            <h2 className="text-5xl font-extrabold mt-10 text-center">All Art and Craft</h2>
            
            <div className="text-center font-medium mb-4 mt-20 mr-12">
                <label htmlFor="subcategory" className="mr-2">Sort by Subcategory:</label>
                <select
                    id="subcategory"
                    onChange={(e) => setSortSubcategory(e.target.value)}
                    value={sortSubcategory}
                    className="border p-2 rounded"
                >
                    <option value="">All</option>
                    <option value="Landscape Painting">Landscape Painting</option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Watercolor Painting">Watercolor Painting</option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28">
                {sortedCrafts.map((craft) => (
                    <CraftCrad key={craft._id} craft={craft} />
                ))}
            </div>
        </div>
    );
};

export default AllArtCraft;
