import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";


const MyCardList = () => {
    const { user} = useAuth() || {};
    // console.log(user)
    const [item, setItem] = useState([]);
   

    useEffect(() =>{
        fetch(`http://localhost:5000/cardList/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setItem(data);
        })
    },[user])

    return (
        <div className="pt-10">
          {
            item.map(p=>(
              <div key={p.id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={p.url} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{p.item_name}</h2>
                    <p>Price: {p.price}</p>
                    <p>Rating: {p.rating}</p>
                    <p>Customization: {p.customization}</p>
                    <p>stockStatus: {p.stockStatus}</p>
                    <div className="card-actions justify-center">
                      <Link to ={`/update/${p._id}`}>
                      <button className="btn btn-primary">Update</button>
                      </Link>
                 
                    <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
                </div>
              </div>
            ))
          }
        </div>
    );
};

export default MyCardList;