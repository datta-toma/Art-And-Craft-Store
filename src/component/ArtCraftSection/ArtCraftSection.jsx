
import { useState, useEffect } from "react"; 
import ArtCraftCardSection from "./ArtCraftCardSection";

const ArtCraftSection = ({crafts}) => {
    const [fareastCrafts, setFareastCrafts] = useState([]);

useEffect(() => {
   if (crafts && crafts.length > 0) {
    setFareastCrafts(crafts.slice(-6)); 
   }
 }, [crafts]);


    return (
        <div>
             <h3 className="text-4xl mt-5 text-center font-extrabold">Art & Craft</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28 ">
            {
                fareastCrafts.map(craft => <ArtCraftCardSection key={craft._id} craft={craft}></ArtCraftCardSection>)
            }
            </div>

        </div>
    );
};

export default ArtCraftSection;