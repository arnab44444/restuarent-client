import React, { use, useState } from "react";
import MyOrderCard from "./MyOrderCard";
import Swal from "sweetalert2";

const FoodList = ({ myFoodPromise }) => {
  const initialFood = use(myFoodPromise);
  const [orders, setOrders] = useState(initialFood);

  const handleReturn = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "If any food is available then you get the order.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3b82f6",  // Tailwind primary default blue-500
        cancelButtonColor: "#ef4444",   // Tailwind red-500
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://restuarent-server-sepia.vercel.app/cancel_order/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Cancelled!",
                  text: "Your order has been cancelled.",
                  icon: "success",
                  confirmButtonColor: "#3b82f6", // primary color
                });
  
                // setOrders((prev) => ({
                //   ...prev,
                //   quantity: prev.quantity + 1,
                // }));
  
                const remainingOrders = orders.filter((book) => book._id !== _id);
                setOrders(remainingOrders);
              }
            });
        }
      });
    };

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
      className="bg-white border border-orange-100 shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-[1.01]"
    >
      <div className="flex gap-4 p-4 items-center bg-gradient-to-r from-orange-100 via-yellow-50 to-white">
        <img
          src={food.image}
          alt={food.name}
          className="h-20 w-20 rounded-xl object-cover border border-orange-300 shadow"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{food.name}</h2>
          <p className="text-sm text-gray-600 font-medium">{food.category}</p>
        </div>
      </div>

      <div className="p-4 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Origin:</span> {food.origin}
        </p>
        <p>
          <span className="font-semibold">Buyer:</span> {food.buyerName}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {food.quantity}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${food.price}
        </p>
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={() => handleReturn(food._id)}
          className="w-full btn btn-sm bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:scale-105 transition-transform duration-200"
        >
          ❌ Cancel Order
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default FoodList;
