import React, { use, useState } from "react";
import { Link } from "react-router"; // Fixed: use react-router-dom
import MyFoodCard from "./MyFoodCard";

const PostList = ({ myPostPromise }) => {
  const initialPost = use(myPostPromise);
  const [post, setPost] = useState(initialPost);

  return (
    <div className="mx-auto  max-w-7xl px-4 md:px-8 py-10">
      <h2 className="text-3xl mt-10 font-bold  text-center text-gray-400 bg-base-100 p-3 ">
        Your Food Posts
      </h2>

      {/* Table Layout for Medium and Large Screens */}
      <div className="hidden sm:block bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="table w-full text-center">
          <thead className="bg-gradient-to-r from-orange-100 to-yellow-50">
            <tr className="text-orange-600 text-base font-semibold">
              <th className="py-3">Picture</th>
              <th>Food Name</th>
              <th>Category</th>
              <th>Origin</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map((food) => (
              <MyFoodCard key={food._id} food={food} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="sm:hidden mt-10 space-y-6">
        {post.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-xl shadow-md p-5 transition hover:shadow-orange-200 border border-orange-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={food.image}
                alt={food.name}
                className="h-16 w-16 rounded-lg object-cover border border-orange-200"
              />
              <div>
                <h2 className="text-xl text-black font-bold ">{food.name}</h2>
                <p className="text-sm text-black">{food.category}</p>
              </div>
            </div>

            <div className="text-sm text-black space-y-1">
              <p><span className="font-semibold">Origin:</span> {food.origin}</p>
              <p><span className="font-semibold">Price:</span> ${food.price}</p>
            </div>

            <div className="mt-4">
              <Link to={`/updateBook/${food._id}`}>
                <button className="btn btn-sm w-full bg-orange-500 hover:bg-red-600 text-white rounded-md transition-all duration-300">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
