import { useState } from "react";
import Swal from "sweetalert2";

const AddCraft = () => {

    const [customization, setCustomization] = useState("Yes");


    const handleAddCraft = event =>{
        event.preventDefault();

        const form = event.target;

        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const url = form.url.value;
        const processing_time = form.processing_time.value;

        const newCraft ={item_name, subcategory_name, short_description, price, rating , url, processing_time}
        console.log(newCraft)

        // send data to the server
        fetch('http://localhost:5000/craft', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Added successfully",
                    text: " successfully.",
                  });
            }
        })
    }



    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text 3xl font-extrabold text-center">Add Craft</h2>
                <form onSubmit={handleAddCraft} className="mt-10">
                    <div className="flex gap-8 ">
                    
                    {/* left side */}
                        <div className="flex-1">
                            <label className="block mb-2 "> Item Name</label>
                                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"placeholder=" Item Name" id="name"name="item_name"></input>

                            <label className="block mb-2 "> Subcategory  Name</label>
                                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"placeholder=" Subcategory  Name" id="name"name="subcategory_name"></input>
                            
                            <label className="block mt-4 mb-2">Price</label>
                                 <input className="w-full p-2 border rounded-md focus:outline-black"type="text"placeholder="Enter Price"id="Price"name="price"></input>

                            <label className="block mt-4 mb-2">Customization</label>
                                 <select  className="w-full p-2 border rounded-md focus:outline-black"
                                name="customization"
                                value={customization}onChange={(e) => setCustomization(e.target.value)}>
                                  <option value="Yes" selected>Yes</option>
                                  <option value="No" selected>No</option>
                                 </select>
                               
                        </div>
                        {/* Right side */}
                          <div className="flex-1">
                               <label className="block mb-2">URL</label>
                                     <input className="w-full p-2 border rounded-md focus:outline-black"type="text"placeholder="Enter Image URL"id="url"name="url"></input>
                                <label className="block mb-2 mt-4 ">Short Description</label>
                                     <input className="w-full p-2 border rounded-md focus:outline-black" type="text"
                                     placeholder="Short Description"id="Short Description"name="short_description"></input>

                                <label className="block mt-4 mb-2 ">Rating </label>
                                     <input className="w-full p-2 border rounded-md focus:outline-black"type="number"placeholder="Enter Rating"id="rating"name="rating"></input>
                                <label className="block mb-2 mt-4 ">Processing Time</label>
                                     <input className="w-full p-2 border rounded-md focus:outline-black"type="text"placeholder="Processing Time"id="Processing Time"name="processing_time"></input>
                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-cyan-600  bg-slate-400 duration-200 text-white cursor-pointer font-semibold"type="submit"value="Add Craft"></input>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;