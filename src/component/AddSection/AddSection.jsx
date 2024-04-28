
import { useLoaderData } from "react-router-dom";
import AddSectionCard from "./AddSectionCard";
import { useState, useEffect } from "react"; 

const AddSection = ({crafts}) => {
const [craftsToShow, setCraftsToShow] = useState([]);

useEffect(() => {
   if (crafts && crafts.length > 0) {
     setCraftsToShow(crafts.slice(0, 6)); 
   }
 }, [crafts]);

//   const fareastCrafts = crafts.slice(-6);
 
  return (
   <div>
   
   <h3 className="text-4xl mt-5 text-center font-extrabold">Craft Items</h3>
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28 ">
   {
     craftsToShow.map(craft => <AddSectionCard key={craft._id} craft={craft}></AddSectionCard>)
   }
   </div>

   {/* <h3 className="text-3xl mt-10 text-center">Fareast Section</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:m-28">
        {
          fareastCrafts.map((craft) => (
            <AddSectionCard key={craft._id} craft={craft} />
          ))
        }
      </div> */}

   
 </div>
  );
};


export default AddSection;