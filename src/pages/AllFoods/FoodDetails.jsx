import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const FoodDetails = () => {
  const data = useLoaderData();

  const [food, setFood] = useState(data);

  const {
    _id,
    image,
    name,
    quantity,
    origin,
    category,
    description,
    price,
    purchasedCount = 0, // default 0 if undefined
  } = food;

  return (
    <div className="max-w-md  mx-auto mt-20 p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
        🍴 Food Details
      </h2>

      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={image}
            alt={name}
            className="h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{origin}</div>
          </h2>
          <p>{description}</p>

          <div className="mt-4 text-black space-y-2">
            <p className="bg-red-300 text-center text-black py-1 rounded font-semibold">
              Quantity: {quantity}
            </p>
            <p className="bg-yellow-300 text-center py-1 rounded font-semibold">
              Category: {category}
            </p>
            <p className="bg-green-300 text-center py-1 rounded font-semibold">
              Price: ৳{price}
            </p>
            <p className="bg-purple-300 text-center py-1 rounded font-semibold">
              Purchased: {purchasedCount} times
            </p>
          </div>

          <div className="mt-4">
            {quantity > 0 ? (
              <a href={`/foodPurchase/${_id}`}>
                <button className="btn bg-orange-600 text-white btn-sm w-full">
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
