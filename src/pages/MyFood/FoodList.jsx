import React, { use, useState } from "react";
import MyOrderCard from "./MyOrderCard";

const FoodList = ({ myFoodPromise }) => {
  const initialFood = use(myFoodPromise);
  const [orders, setOrders] = useState(initialFood);

  return (
    <div className="mx-auto max-w-7xl py-10 px-4">
      <h2 className="text-3xl mt-10 font-bold text-gray-400 bg-base-100 p-3  text-center ">
        Your Orders
      </h2>

      {/* Table Layout for Medium and Large Screens */}
      <div className="hidden sm:block bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="table w-full text-center">
          <thead className="bg-gradient-to-r from-orange-100 to-yellow-50">
            <tr className="text-orange-600 text-md font-semibold">
              <th className="py-3">Picture</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((food) => (
              <MyOrderCard
                key={food._id}
                food={food}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="sm:hidden space-y-6 mt-10">
        {orders.map((food) => (
          <div
            key={food._id}
            className="bg-white shadow-lg rounded-xl p-5 transition hover:shadow-orange-200 border border-orange-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={food.image}
                alt={food.name}
                className="h-16 w-16 rounded-xl object-cover border border-orange-200"
              />
              <div>
                <h2 className="text-xl font-bold text-black">
                  {food.name}
                </h2>
                <p className="text-sm text-black font-medium">
                  {food.category}
                </p>
              </div>
            </div>

            <div className="text-sm text-black space-y-1">
              <p>
                <span className="font-semibold text-black">Origin:</span> {food.origin}
              </p>
              <p>
                <span className="font-semibold text-black">Buyer:</span> {food.buyerName}
              </p>
              <p>
                <span className="font-semibold text-black">Quantity:</span> {food.quantity}
              </p>
              <p>
                <span className="font-semibold text-black">Price:</span> ${food.price}
              </p>
            </div>

            <div className="mt-4">
              <a href={`/updateBook/${food._id}`}>
                <button className="btn btn-sm w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-all duration-300">
                  Delete
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
