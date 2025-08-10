import React, { useState } from "react";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const data = useLoaderData();

  const [food] = useState(data);

  const {
    _id,
    image,
    name,
    quantity,
    origin,
    category,
    description,
    price,
    purchasedCount = 0,
  } = food;

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        🍴 Food Details
      </h2>

      <div className="card bg-base-100 shadow-sm rounded-lg border border-orange-300">
        <figure>
          <img src={image} alt={name} className="h-60 w-full object-cover rounded-t-lg" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title flex items-center justify-between">
            {name}
            <div className="badge badge-outline badge-md text-orange-600 border-orange-600">
              {origin}
            </div>
          </h2>
          <p className="mt-2 text-gray-700">{description}</p>

          <div className="mt-5 space-y-3 text-orange-700 font-semibold">
            <p className="badge badge-outline w-full text-center border-orange-600">
              Quantity: {quantity}
            </p>
            <p className="badge badge-outline w-full text-center border-orange-600">
              Category: {category}
            </p>
            <p className="badge badge-outline w-full text-center border-orange-600">
              Price: ৳{price}
            </p>
            <p className="badge badge-outline w-full text-center border-orange-600">
              Purchased: {purchasedCount} times
            </p>
          </div>

          <div className="mt-6">
            {quantity > 0 ? (
              <a href={`/foodPurchase/${_id}`}>
                <button className="btn bg-orange-600 text-white btn-sm w-full hover:bg-orange-700">
                  Purchase Now
                </button>
              </a>
            ) : (
              <button
                className="btn btn-sm w-full bg-gray-400 cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;


// update

// again