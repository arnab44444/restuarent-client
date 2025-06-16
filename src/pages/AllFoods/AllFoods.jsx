import React, { useState } from "react";
import { useLoaderData } from "react-router";

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [foods, setFoods] = useState(foodsData || []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">All Foods</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="card bg-base-100 shadow-sm w-full max-w-sm mx-auto"
          >
            <figure>
              <img
                src={food.image}
                alt={food.name}
                className="h-52 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {food.name}
                <div className="badge badge-secondary">{food.origin}</div>
              </h2>

              <div className="card-actions justify-center mt-2">
                <div className="badge badge-outline">{food.category}</div>
                <div className="badge badge-outline">Quantity: {food.quantity}</div>
              </div>

              <div className="mt-4">
                <a href={`/foodDetails/${food._id}`}>
                  <button className="btn btn-primary btn-sm w-full">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
