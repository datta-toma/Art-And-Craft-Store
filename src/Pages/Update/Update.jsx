import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const { id } = useParams(); 
  const [craft, setCraft] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data); 
      });
  }, [id]);

  const handleUpdateCraft = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedCraft = {
      item_name: form.item_name.value,
      subcategory_name: form.subcategory_name.value,
      short_description: form.short_description.value,
      price: form.price.value,
      url: form.url.value,
      processing_time: form.processing_time.value,
      stockStatus: form.stockStatus.value,
      customization: form.customization.value,
    };

 
    fetch(`http://localhost:5000/craft/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            text: "Craft item successful.",
          });
        } 
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text 3xl font-extrabold text-center">Update Craft</h2>
      <form onSubmit={handleUpdateCraft}>
     
        <div className="flex gap-8">

          {/* left side */}
          <div className="flex-1">
             <label className="block mb-2 "> Item Name</label>
                                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"
                                  defaultValue={craft?.item_name}
                                 placeholder=" Item Name" id="name"name="item_name"></input>

            <label className="block mb-2 "> Subcategory  Name</label>
                                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"
                                 defaultValue={craft?.subcategory_name}
                                 placeholder=" Subcategory  Name" id="name"name="subcategory_name"></input>
                            
            <label className="block mt-4 mb-2">Price</label>
                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"
                 defaultValue={craft?.price}
                 placeholder="Enter Price"id="Price"name="price"></input>

            <label className="block mt-4 mb-2">Stock Status</label>
             <select className="w-full p-2 border rounded-md focus:outline-black"type="text"
             defaultValue={craft?.stockStatus}
             placeholder="Enter stockStatus"id="stockStatus"name="stockStatus">
            <option value="In Stock" selected>In Stock</option>
             <option value="Made to Order" selected>Made to Order</option>
            </select>

            <label className="block mt-4 mb-2">Customization</label>
            <select className="w-full p-2 border rounded-md focus:outline-black"type="text"
            defaultValue={craft?.customization}
            placeholder="Enter Customization"id="Customization"name="customization">
            <option value="Yes" selected>Yes</option>
             <option value="No" selected>No</option>
            </select>

                            
                               
                        </div>


          {/* Right side */}
         <div className="flex-1">
            <label className="block mb-2">URL</label>
                <input className="w-full p-2 border rounded-md focus:outline-black"type="text"
                 defaultValue={craft?.url}
                placeholder="Enter Image URL"id="url"name="url"></input>

            <label className="block mb-2 mt-4 ">Short Description</label>
                <input className="w-full p-2 border rounded-md focus:outline-black" type="text"
                 defaultValue={craft?.short_description}
                 placeholder="Short Description"id="Short Description"name="short_description"></input>

            

            <label className="block mb-2 mt-4 ">Processing Time</label>
                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"
                  defaultValue={craft?.processing_time}
                 placeholder="Processing Time"id="Processing Time"name="processing_time"></input>

                                   

                        </div>
        </div>

        

        
        <input
          className="px-4 w-full py-2 mt-4 bg-slate-400 text-white cursor-pointer font-semibold"
          type="submit"
          value="Update Craft"
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
