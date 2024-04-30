import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {JackInTheBox, Roll, } from "react-awesome-reveal";

const MyCardList = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]); 

  useEffect(() => {
    if (user) {
      fetch(`https://art-and-craft-store-server-eight.vercel.app/cardList/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data); 
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-store-server-eight.vercel.app/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft item has been deleted.",
                icon: "success",
              });

              const remainingItems = items.filter((item) => item._id !== _id);
              setItems(remainingItems);
            }
          });
      }
    });
  };

  return (
    <div className="pt-10">
      {items.map((item) => (
        <div key={item._id}> 
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <JackInTheBox>
              <img src={item.url} alt={item.item_name} /> 
              </JackInTheBox>
            </figure>
            <div className="card-body">
            <h2 className="card-title">{item.item_name}</h2>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
              <p>Customization: {item.customization}</p>
              <div className="card-actions justify-center">
                <Roll>
                <Link to={`/update/${item._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
                
                <button onClick={() => handleDelete(item._id)} className="btn btn-primary">
                  Delete
                </button>
                </Roll>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCardList;
