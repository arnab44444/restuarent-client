import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const FoodPurchase = () => {
  const food = useLoaderData();
  console.log(food)

  const { _id, name, price, quantity, purchasedCount = 0 } = food;

  const [foods, setFoods] = useState(food);
  const [hasOrderd, setHasOrdered] = useState(false);
  const [inputQuantity, setInputQuantity] = useState(1);

  const { user } = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      hour12: true,
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(formattedTime);
  }, []);

  const confirmOrder = () => {

    if (food.addedByEmail === user.email) {
      Swal.fire("Error", "You cannot order your own food!", "error");
      return;
    }
    
    const purchaseData = {
      foodId: _id,
      name,
      price,
      quantity: inputQuantity,
      buyerName: user.displayName,
      buyerEmail: user.email,
      orderTime: currentTime,
    };

    axios
      .post(`http://localhost:3000/place-order/${_id}`, purchaseData)
      .then(() => {
        toast.success("Purchase successfully");
        setFoods((prev) => ({
          ...prev,
          quantity: prev.quantity - inputQuantity,
          purchasedCount: (prev.purchasedCount || 0) + inputQuantity,
        }));
        setHasOrdered(true);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        🍛 Confirm Food Purchase
      </h2>

      <div className="space-y-4">
        <div>
          <label className="label font-semibold">Food Name</label>
          <input
            type="text"
            value={name}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold">Price</label>
          <input
            type="number"
            value={price}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold">Quantity</label>
          <input
            type="number"
            min="1"
            max={quantity}
            value={inputQuantity}
            onChange={(e) => setInputQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label font-semibold">Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold">Buyer Email</label>
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold">Order Time</label>
          <input
            type="text"
            value={currentTime}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button
          onClick={confirmOrder}
          className="btn btn-success w-full mt-4"
          disabled={inputQuantity > quantity || inputQuantity <= 0}
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default FoodPurchase;
