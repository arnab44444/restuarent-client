import React, { use, useState } from "react";
import { Link } from "react-router";
import MyFoodCard from "./MyFoodCard";

const PostList = ({ myPostPromise }) => {
  const initialPost = use(myPostPromise);

  console.log(initialPost);

  const [post, setPost] = useState(initialPost);

  return (
    <div className="mx-auto">
      {/* Table Layout for Medium and Large Screens */}
      <div className="bg-base-200 hidden sm:block px-4 mt-10">
        <table className="table">
          <thead>
            <tr className="text-primary">
              <th>Picture</th>
              <th >Food Name</th>
              <th >Category</th>
              <th >Origin</th>
              <th >Price</th>
              <th></th>
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
      <div className="sm:hidden px-4 mt-10 space-y-5">
        {post.map((food) => (
          <div
            key={food._id}
            className="border border-secondary dark:border-secondary rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={food.image}
                alt={food.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-primary">{food.name}</h2>
                <p className="text-sm text-secondary">{food.category}</p>
              </div>
            </div>
            <p className="font-semibold text-primary">{food.origin}</p>

            <div className="mt-3">
              <a href={`/updateBook/${food._id}`}>
                <button className="btn w-full bg-primary hover:bg-secondary">
                  Update
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
